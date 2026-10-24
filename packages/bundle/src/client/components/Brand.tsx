import * as React from 'react';
import { LogoMark } from 'expert-workshop-ui';

export function BrandName() {
  return <span data-testid="expertworkshop-brand">Expert Workshop</span>;
}

export function BrandMark() {
  return <LogoMark size={22} />;
}

export function DiagnosticsMark() {
  return <span aria-hidden>W</span>;
}
