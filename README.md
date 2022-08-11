# Calculate meter bill

မီတာဘေတွက်တဲ့app ရေးတဲ့ကောင်တွေ တစ်ယောက်မှ open source မလုပ်ပေးလို့ ကွကိုယ်ရေးပြီး open source လုပ်လိုက်ပြီ 😒

Typescript နဲ့ ရေးထားပေမဲ့ Javascript ရတဲ့သူတောင် အေးဆေးကြည့်ရတယ်

2 files ထဲပဲပါတယ်။ bill တွက်တဲ့ အဓိက fileနဲ့ eng to myanmar number ပြောင်းတဲ့ file

code ကို တိုတိုနဲ့ reusable ဖြစ်တဲ့ function ရေးပြီး unit ကို တိုက်ရိုက်တွက်တဲ့ နည်းအပြင် အရင်လက မီတာ unit နဲ့ ခုလက်ရှိရောက်နေတဲ့ unit နုတ်ပြီးတွက်တာပါ ထည့်ထားပါတယ်။

- `homeUnitCalculation(units: number)`;
- `factoryUnitCalculation(units: number)`
- `finAndCalculateUsedUnit(preMonthUnits: number, currentUnits: number)`

ဟိုဘက် acc မှာ react native နဲ့ app ထုတ်ပြီးရင်လဲ app ကို opensource လုပ်ဦးမယ် 😘