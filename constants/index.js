const BUILDING_MACHINE_LIST = {
  RTBA1: 0,

  RTBA2: 0,

  RTBA3: 0,

  RTBA4: 0,

  RTBB1: 0,

  RTBB2: 0,

  RTBB3: 0,

  RTBB4: 0,

  RTBC1: 0,

  RTBC2: 0,

  RTBC3: 0,

  RTBC4: 0,

  RTBD1: 0,

  RTBD2: 0,

  RTBD3: 0,

  RTBD4: 0,
};

const CURING_MACHINE_LIST = {
  RTCA01: 0,
  RTCA02: 0,
  RTCA03: 0,
  RTCA04: 0,
  RTCA05: 0,
  RTCA06: 0,
  RTCA07: 0,
  RTCA08: 0,
  RTCA09: 0,
  RTCB01: 0,
  RTCB02: 0,
  RTCB03: 0,
  RTCB04: 0,
  RTCB05: 0,
  RTCB06: 0,
  RTCB07: 0,
  RTCB08: 0,
  RTCB09: 0,
  RTCC01: 0,
  RTCC02: 0,
  RTCC03: 0,
  RTCC04: 0,
  RTCC05: 0,
  RTCC06: 0,
  RTCC07: 0,
  RTCC08: 0,
  RTCC09: 0,
  RTCD01: 0,
  RTCD02: 0,
  RTCD03: 0,
  RTCD04: 0,
  RTCD05: 0,
  RTCD06: 0,
  RTCD07: 0,
  RTCD08: 0,
  RTCD09: 0,
  RTCE01: 0,
  RTCE02: 0,
  RTCE03: 0,
  RTCE04: 0,
  RTCE05: 0,
  RTCE06: 0,
  RTCE07: 0,
  RTCE08: 0,
  RTCE09: 0,
  RTCF01: 0,
  RTCF02: 0,
  RTCF03: 0,
  RTCF04: 0,
  RTCF05: 0,
  RTCF06: 0,
  RTCF07: 0,
  RTCF08: 0,
  RTCF09: 0,
  RTCG01: 0,
  RTCG02: 0,
  RTCG03: 0,
  RTCG04: 0,
  RTCG05: 0,
  RTCG06: 0,
  RTCG07: 0,
  RTCG08: 0,
  RTCG09: 0,
  RTCG01: 0,
  RTCG02: 0,
  RTCG03: 0,
  RTCG04: 0,
  RTCG05: 0,
  RTCG06: 0,
  RTCG07: 0,
  RTCG08: 0,
  RTCG09: 0,
  RTCH01: 0,
  RTCH02: 0,
  RTCH03: 0,
  RTCH04: 0,
  RTCH05: 0,
  RTCH06: 0,
  RTCH07: 0,
  RTCH08: 0,
  RTCH09: 0,
};

const OEE_TARGET = 65;

const ITEM_LOSS_CATEGORY = [
  {
    id: "planned-closing-time",
    name: "Planned Closing Time",
  },
  {
    id: "no-schedule",
    name: "No Schedule",
  },
  {
    id: "planned-maintenance",
    name: "Planned Maintenance",
  },
  {
    id: "rest-sholat-toilet",
    name: "Rest, Sholat, & Toilet",
  },
  {
    id: "test-development",
    name: "Test and Development",
  },
  {
    id: "set-up",
    name: "Set up",
  },
  {
    id: "utility-pln-trip",
    name: "Utility & PLN Trip",
  },
  {
    id: "machine-breakdown",
    name: "Machine Breakdown",
  },
  {
    id: "material-shortage",
    name: "Material Shortage",
  },
  {
    id: "lower-efficency",
    name: "Lower Efficency",
  },
  {
    id: "delay-production",
    name: "Delay Production",
  },
  {
    id: "quality-loss",
    name: "Quality Loss",
  },
];

export {
  BUILDING_MACHINE_LIST,
  CURING_MACHINE_LIST,
  OEE_TARGET,
  ITEM_LOSS_CATEGORY,
};
