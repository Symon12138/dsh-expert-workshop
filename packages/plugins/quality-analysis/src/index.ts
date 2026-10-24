import type { Context } from '@deepseek-ai/cordis';
import type { WorkbenchDescriptor, LibraryService } from 'expert-workshop-contracts';
import { mountQualityRecordsHost } from './runtime/records-host.js';
import { QualityArtifactExecutor } from './runtime/artifact-executor.js';
import { QualityAnalysisExecutor } from './runtime/analysis-executor.js';
import { QualityCsvImporter } from './runtime/csv-import.js';
import { QualityXlsxImporter } from './runtime/xlsx-import.js';
export const name = 'expertworkshop-quality-analysis';
export const inject = ['storageDomain','expertworkshopIdentity','connection','expertworkshopWorkbenchRegistration','expertworkshopLibrary','tools','agents','expertworkshopAccess','sessionController','workspaceController','workspaceRegistry'];
export const descriptor: WorkbenchDescriptor = {id:'expertworkshop.quality-analysis',title:'质量分析',description:'检验数据、缺陷分析和可追溯报告',protocolVersion:'1.0',layout:'full-page',hostCompatibility:{sdk:'^1.0.0',harness:'0.2.1-rc.2'},capabilities:[]};
export async function apply(ctx:Context) {
 const artifacts = new QualityArtifactExecutor(new URL('./artifact-worker.js',import.meta.url));
 const analysis = new QualityAnalysisExecutor(new URL('./analysis-worker.js',import.meta.url));
 const csv = new QualityCsvImporter(new URL('./csv-worker.js',import.meta.url));
 const xlsx = new QualityXlsxImporter(new URL('./xlsx-worker.js',import.meta.url));
 ctx.effect(()=>()=>Promise.allSettled([artifacts.close(),analysis.close(),csv.close(),xlsx.close()]),'expertworkshop.quality.workers.close');
 const library = ctx.get('expertworkshopLibrary') as LibraryService | undefined;
 mountQualityRecordsHost(ctx,artifacts,analysis,library ? {library,csv,xlsx} : undefined);
 const registration = ctx.get('expertworkshopWorkbenchRegistration') as {registerManaged(caller:Context,declaration:WorkbenchDescriptor,page:string):Promise<unknown>};
 await registration.registerManaged(ctx,descriptor,'expertworkshop-quality-analysis-page');
}
