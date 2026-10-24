# Expert Workshop 鎻掍欢鐙珛瀹夎璇存槑

杩欏鎻掍欢鎶?WorkBuddy 椋庢牸鐨勩€屼笓瀹朵腑蹇冦€佷笓瀹跺洟銆佹妧鑳藉競鍦恒€佽繛鎺ュ櫒甯傚満銆侀」鐩€嶅仛鎴愮嫭绔嬬殑 DeepSeek Harness 鎻掍欢銆傛瘡涓彃浠堕兘鏄崟鐙殑 npm 鍖呭拰鐙珛鏁版嵁鍩燂紝鍙互鏁村瀹夎锛屼篃鍙互鎸夐渶鍗曠嫭瀹夎銆?
- 杩愯鐜锛欴eepSeek Harness `0.2.1-rc.2`
- 鍙戝竷鏂瑰紡锛欸itHub Release 闄勪欢锛坄.tgz`锛夛紝涓嶉渶瑕?npm 鍙戝竷
- 閫傜敤骞冲彴锛歐indows / macOS / Linux锛堝懡浠や腑鐨勮矾寰勬寜鏈満淇敼锛?- 鏁版嵁闅忓寘锛氫笓瀹剁洰褰曘€乸reset銆?23 涓笓瀹舵妧鑳藉寘宸茬粡鎵撹繘鎻掍欢鍖咃紝棣栨瀹夎浼氳嚜鍔ㄨ惤鐩?
## 鐗堟湰

| 鎻掍欢 | 鍖呭悕 | 鐗堟湰 |
| --- | --- | --- |
| 韬唤 | `expert-workshop-provider-identity-local` | `0.1.0-alpha.7` |
| 瀹¤ | `expert-workshop-plugin-audit` | `0.1.0-alpha.6` |
| 璁块棶鎺у埗 | `expert-workshop-plugin-access` | `0.1.0-alpha.7` |
| 鎶€鑳?| `expert-workshop-plugin-skills` | `0.1.0-alpha.59` |
| 涓撳/涓撳鍥?| `expert-workshop-plugin-experts` | `0.1.0-alpha.24` |
| 杩炴帴鍣?| `expert-workshop-plugin-connectors` | `0.1.0-alpha.10` |
| 椤圭洰 | `expert-workshop-plugin-projects` | `0.1.0-alpha.5` |

## 涓嬭浇

鍙戝竷椤碉細https://github.com/Symon12138/symon-studio/releases/tag/expert-workshop-v0.1.0

7 涓?`.tgz` 閮藉湪璇?Release 鐨?Assets 涓紝涓嬭浇鍚庢寜涓嬮潰鐨勯『搴忓畨瑁呫€?
## 鏂瑰紡涓€锛氭暣濂楀畨瑁咃紙鎺ㄨ崘锛?
鎸変緷璧栭『搴忓畨瑁咃細

```bash
dsh plugin --profile web add file:/path/expert-workshop-provider-identity-local-0.1.0-alpha.7.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-audit-0.1.0-alpha.6.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-access-0.1.0-alpha.7.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-skills-0.1.0-alpha.59.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-experts-0.1.0-alpha.24.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-connectors-0.1.0-alpha.10.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-projects-0.1.0-alpha.5.tgz
dsh --profile web
```

瀹夎瀹屾垚鍚庯細

- 涓撳涓績鑷姩鍑虹幇 419 涓笓瀹?涓撳鍥紙鍚?A鑲＄爺绌跺洟闃?6 涓崗浣滃満鏅級
- 鎶€鑳介〉鑷姩鍑虹幇 123 涓笓瀹舵妧鑳藉寘
- 杩炴帴鍣ㄩ〉鏈?15 涓嫭绔?MCP + 181 涓潪 WorkBuddy 寮虹粦瀹氳繛鎺ュ櫒
- 椤圭洰椤垫湁鍐呯疆妯℃澘

## 鏂瑰紡浜岋細鍗曟彃浠跺畨瑁?
| 鎯宠鐨勫姛鑳?| 鏈€灏戝畨瑁?|
| --- | --- |
| 鍙鎶€鑳?| `skills` |
| 鍙涓撳/涓撳鍥?| `skills` + `experts` |
| 鍙杩炴帴鍣?| `connectors` |
| 鍙椤圭洰 | `projects` |
| 闇€瑕佹潈闄?瀹¤/澶氱敤鎴?| `identity-local` + `audit` + `access`锛屽啀瑁呬笂灞傛彃浠?|

鍗曡绀轰緥锛堜笓瀹?+ 鎶€鑳斤級锛?
```bash
dsh plugin --profile web add file:/path/expert-workshop-plugin-skills-0.1.0-alpha.59.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-experts-0.1.0-alpha.24.tgz
dsh --profile web
```

`experts`銆乣connectors`銆乣projects` 宸叉敼鎴愬彲閫変緷璧栵細

- 娌℃湁 `identity/access/audit` 鏃讹紝浣跨敤鏈湴涓汉妯″紡锛歚local-user / local-personal`銆佸厑璁告墍鏈夋搷浣溿€佷笉鍐欏璁°€?- 瀹夎 foundation 鍚庯紝浼氳嚜鍔ㄤ娇鐢ㄧ湡瀹炵殑韬唤銆佹潈闄愬拰瀹¤鏈嶅姟銆?- `experts` 娌℃湁 `skills` 鎻掍欢鏃朵粛鍙墦寮€涓撳涓績锛屽彧鏄€屼娇鐢ㄦ妧鑳姐€嶆樉绀轰负绌恒€佹妧鑳戒緷璧栨鏌ヨ烦杩囥€傚缓璁笓瀹跺満鏅悓鏃跺畨瑁?`skills`銆?
## 鏁版嵁浣嶇疆涓庨噸缃?
| 鏁版嵁 | 浣嶇疆 |
| --- | --- |
| 涓撳鐩綍 | `~/.dsh/storages/workdsh_experts` |
| 涓撳 preset | `~/.agents/.workdsh-state/experts/presets` |
| 鎶€鑳?| `~/.agents/skills`锛圵indows 榛樿 `C:\Users\<user>\.agents\skills`锛?|
| 杩炴帴鍣ㄩ厤缃?| profile 鐨?connector storage + 鍑嵁鏈嶅姟 |
| 椤圭洰 | `~/.dsh/storages/workdsh_projects` |

閲嶇疆涓撳鐩綍锛氬垹闄?`~/.dsh/storages/workdsh_experts` 鍜?`~/.agents/.workdsh-state/experts/presets`锛岄噸鍚悗鎻掍欢浼氶噸鏂颁粠鍖呭唴 seed 鍐欏叆銆傚垹闄ゅ墠璇峰厛澶囦唤銆?
## 鎶€鑳藉競鍦?
- **鎺ㄨ崘**锛氭湰鍦版妧鑳界洰褰?+ 闅忓寘鎶€鑳?- **SkillHub**锛氳皟鐢?`skillhub.cn` 鍏紑姒滃崟鍜屽叕寮€鎼滅储锛岀湡瀹炰笅杞姐€佷竴閿畨瑁?- **GitHub 浠撳簱**锛欰nthropic Skills銆丼uperpowers銆丮att Pocock銆丱pen Design锛屽叡 617 涓妧鑳?- SkillHub 瀹屾暣鎼滅储涓嶉渶瑕佺櫥褰曪紱濡傛灉瑕佷娇鐢ㄤ釜浜哄彂甯?璐﹀彿鐩稿叧鑳藉姏锛屽彲鍦?`~/.dsh/skillhub-token.txt` 鏀?CLI Token锛坄skh_...`锛夛紝鏂囦欢涓嶈鎻愪氦鍒颁粨搴撱€?
## 宸茬煡闄愬埗

- WorkBuddy 鐨勪粯璐逛笓瀹躲€佷簯绔悓姝ャ€佸垎浜摼鎺ャ€佷笂鏋跺鏍搞€佺湡瀹炰娇鐢ㄩ噺缁熻娌℃湁瀵瑰簲鍚庣锛屼笉鍖呭惈鍦ㄦ湰濂楁彃浠堕噷銆?- WorkBuddy 鏈嶅姟绔巿鏉?鑵捐鍐呯綉/OneID 杩炴帴鍣ㄥ凡绉婚櫎锛涗繚鐣欑殑杩炴帴鍣ㄥ彲鑳介渶瑕佸悇鑷殑 Token/OAuth銆?- SkillHub 浼佷笟涓撴湁鎶€鑳藉彲鑳戒笉鎻愪緵涓嬭浇銆?- A鑲＄爺绌跺洟闃熷師鏈?20 涓妧鑳斤紝preset 缂栬瘧鍦?20 涓椂鍐呴儴鎶ラ敊锛屽綋鍓嶄繚鐣?19 涓€?- 鍗曟彃浠舵湰鍦版ā寮忔病鏈夋潈闄愰殧绂诲拰瀹¤锛涘浜?浼佷笟鍦烘櫙璇峰畨瑁?identity + access + audit銆?
## 楠岃瘉鐘舵€?
- 宸插湪骞插噣 `standalone` profile锛堜粎 `dsh-base` + `dsh-web-app` + `skills` + `experts`锛夐獙璇侊細
  - 涓撳鎻掍欢姝ｅ父鍚姩锛屼笓瀹?API 杩斿洖 419 鏉?  - 鎶€鑳芥彃浠惰嚜鍔?seed锛屾妧鑳?API 杩斿洖 132 鏉?  - 鏃犵己灏?foundation 鏈嶅姟瀵艰嚧鐨勫惎鍔ㄥけ璐?- Web profile 宸查獙璇佷笓瀹躲€佹妧鑳姐€丼killHub銆佽繛鎺ュ櫒銆侀」鐩〉闈㈠彲鐢ㄣ€?
## 璁稿彲

缁ф壙涓婃父 Expert Workshop 鐨?MIT 璁稿彲锛沇orkBuddy 鐩稿叧鍚嶇О鍜屽唴瀹逛粎鐢ㄤ簬鍏煎涓庤縼绉昏鏄庛€?