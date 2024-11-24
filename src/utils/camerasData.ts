export interface ItemPart {
  SKChild: number;
  RegNumberChild: string;
  NameChild: string;
  MNF: number;
  MJ: string;
  TotalPrice: number;
}

export interface CameraItem {
  AltKV: number;
  SKParent: number;
  RegNumberParent: string;
  NameParent: string;
  Position: number;
  Parts: ItemPart[];
}

interface Camera {
  Name: string;
  Structure: CameraItem[];
}

export type CamerasList = Omit<Camera, "Structure">;
export type CameraItemList = Omit<CameraItem, "Parts">;


const camerasData: Camera[] = [
  //***********************/
  {
    "Name": "MC023CG-SY-FL",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-MAIN-FL-PCA",
        "NameParent": "MC Main board Flex Line, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0201-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 10% 0201 H<=0.35MM",
            "MNF": 39,
            "MJ": "pcs",
            "TotalPrice": 0.419094
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 19,
            "MJ": "pcs",
            "TotalPrice": 1.976
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10N-100V",
            "NameChild": "CAP CER 10000PF 100V X7S 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.029224
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003062
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 37,
            "MJ": "pcs",
            "TotalPrice": 0.121286
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-470P-50V",
            "NameChild": "CAP CER 470pF 50V 10% X7R 0402 H<=0.50MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003402
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SBR07U20LPS-7",
            "NameChild": "DIODE SBR 0.7A 20V 2-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.163719
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.085174
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BZT52C3V6LP-7",
            "NameChild": "DIODE ZENER 3.6V 250MW DFN1006",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.132396
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-1U0-6V3-NFM18PC105",
            "NameChild": "CAP CER HF FILTER 1.0uF 6.3V 0603",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.073434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-502244-1530",
            "NameChild": "CONN FPC/FFC ZIF For LVDS 15POS 0.5MM HORIZ Bottom Contact SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.717512
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.019143
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-80R-1.5A",
            "NameChild": "FERRITE CHIP 80 OHMS 1.5A 0402",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.090954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.035076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-3K3-1P",
            "NameChild": "RES 3.30K OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.008526
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.0025
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-10K-1P",
            "NameChild": "RES 10.0 KOHM 1/20W 0201 1% SMD",
            "MNF": 8,
            "MJ": "pcs",
            "TotalPrice": 0.059544
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.009006
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-75K-1P",
            "NameChild": "RES 75.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002516
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-4K99-1P",
            "NameChild": "RES 4.99 KOHM 1/20W 0201 1% SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.00579
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-6K04-1P",
            "NameChild": "RES 6.04K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004298
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-200R-1P",
            "NameChild": "RES 200 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003562
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-0R0",
            "NameChild": "RES 0.0 OHM 1/20W 0201 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006498
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0402-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0804",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.009356
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          },
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CSG324C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 210 I/O, CSBGA324",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 31.645117
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESD8004MUTAG",
            "NameChild": "TVS Array Quad 3.3V 0.4pF",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.275751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FPF2290BUCX-F130",
            "NameChild": "IC OVER-VOLTAGE LOAD SWITCH 4.5A 2.5V-23V UFBGA-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.425387
          },
          {
            "SKChild": 100,
            "RegNumberChild": "STM32F411CEY6TR",
            "NameChild": "IC ARM CORTEX-M4 Microcontroller 512KB Flash 128KB RAM WLCSP49",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.779347
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-33",
            "NameChild": "IC REG MODULE BUCK SYNC 3.3V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.139954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-18",
            "NameChild": "IC REG MODULE BUCK SYNC 1.8V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.130529
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB",
            "NameChild": "IC REG MODULE BUCK SYNC ADJ 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.124684
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MX25U6432FZNI02",
            "NameChild": "IC FLASH 64MBIT 133MHZ 1.8V 8WSON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.919723
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-12",
            "NameChild": "IC REG MODULE BUCK SYNC 1.2V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.097449
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CYUSB3014-BZXI",
            "NameChild": "IC ARM9 USB CONTROLLER 121BGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 12.777787
          },
          {
            "SKChild": 100,
            "RegNumberChild": "24LC128T-I/MNY",
            "NameChild": "IC SERIAL EEPROM 128KBIT 8TDFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.688763
          },
          {
            "SKChild": 100,
            "RegNumberChild": "OSC-ASCO2-26.000MHZ-EK-T3",
            "NameChild": "Oscillator 26.000MHz, 1.6x1.2mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.001858
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-MAIN-FL",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.121426
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-REAR-FL-SUBASSM",
        "NameParent": "MC Flex-Line Rear Subassembly, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MC-MAIN-FL-PCA",
            "NameChild": "MC Main board Flex Line, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-15X15X1-TGA3500",
            "NameChild": "Thermal pad 15x15x1mm, TG-A3500, 3.5W/m-K",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.122277
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MC-REAR-FL-LP",
            "NameChild": "MECH MC Rear Flex-Line part with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MC-REAR-FL-LP",
        "NameParent": "MECH MC Rear Flex-Line part with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MC-REAR-FL",
            "NameChild": "MECH MC Rear Flex-Line part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LQJ-C Color Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-IR650-AR2X-D25",
            "NameChild": "25mm dia IR650 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 5.076839
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LQJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LQJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LQJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, Color, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MC023CG-SY-FL",
        "NameParent": "MC IMX174LQJ-C Color USB3.0 camera, Flex-Line, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LQJ-C Color Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-REAR-FL-SUBASSM",
            "NameChild": "MC Flex-Line Rear Subassembly, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X10-CUST",
            "NameChild": "M2x10, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.031656
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MC023CG-SY-TC",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-CONN-PCA",
        "NameParent": "MC Connector Board",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006124
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0805-1N-1000V",
            "NameChild": "CAP CER 1000PF 1KV 10% X7R 0805 H<=1.45MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.174538
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-2U2-100V-X7R",
            "NameChild": "CAP CER 2.2UF 100V X7R 1206 H<=1.8MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.15601
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-22U-35V-X5R",
            "NameChild": "CAP CER 22UF 35V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.143472
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-FTM-103-02-L-DV",
            "NameChild": "CONN HEADER 6POS 1MM DUAL ROW VERTICAL SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.44
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.170348
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BZT52C3V6LP-7",
            "NameChild": "DIODE ZENER 3.6V 250MW DFN1006",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.132396
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SP1008-01WTG",
            "NameChild": "TVS Back to Back Diode 6V 6pF 0201",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.323056
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-ACP3225-102-2P",
            "NameChild": "CHOKE COMMON MODE 1000 OHM 1.2A 3.2 x 2.5mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.524329
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTC4365HD",
            "NameChild": "IC Overvoltage Undervoltage Reverse Supply Protection DFN-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.808043
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-CONN",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.582966
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-MINISMDC125F16-2",
            "NameChild": "Resetable PTC Fuse 1.25A 16V 1812 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210705
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011058
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1R0-1P",
            "NameChild": "RES 1.00 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001992
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-2M1-1P",
            "NameChild": "RES 2.10M OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004527
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.010794
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-82K-1P",
            "NameChild": "RES 82.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.005121
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100K-1P",
            "NameChild": "RES 100K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011367
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011664
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-220K-1P",
            "NameChild": "RES 220K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003192
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SI7220DN-T1-GE3",
            "NameChild": "MOSFET 2N-CH DUAL 60V 3.4A 1212-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.060445
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-MAIN-TC-PCA",
        "NameParent": "MC Main board Type-C connector",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-2U2-6V3",
            "NameChild": "CAP CER 2.2UF 6.3V X5R 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.00245
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 36,
            "MJ": "pcs",
            "TotalPrice": 0.118008
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-100U-6V3-X5R",
            "NameChild": "CAP CER 100UF 6.3V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.054059
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-470P-50V",
            "NameChild": "CAP CER 470pF 50V 10% X7R 0402 H<=0.50MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0201-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 10% 0201 H<=0.35MM",
            "MNF": 41,
            "MJ": "pcs",
            "TotalPrice": 0.440586
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10N-100V",
            "NameChild": "CAP CER 10000PF 100V X7S 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.029224
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 16,
            "MJ": "pcs",
            "TotalPrice": 1.664
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003062
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.002552
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-0201-ST-.1-.53-3U-30",
            "NameChild": "DIODE SCHOTTKY 100mA 530mV 3uA 30V 0201",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.139214
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SBR07U20LPS-7",
            "NameChild": "DIODE SBR 0.7A 20V 2-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.163719
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESDLC5V0D9",
            "NameChild": "DIODE ESD PROT 5V SOD923",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.060373
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-1U0-6V3-NFM18PC105",
            "NameChild": "CAP CER HF FILTER 1.0uF 6.3V 0603",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.073434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-CNG001S130R",
            "NameChild": "CONN USB TYPE-C VERT SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.731645
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-CLM-103-02-L-D",
            "NameChild": "CONN HEADER 6POS DUAL ROW 1.0MM TOP ENTRY",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.117965
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.019143
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-80R-1.5A",
            "NameChild": "FERRITE CHIP 80 OHMS 1.5A 0402",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.090954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.035076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-75K-1P",
            "NameChild": "RES 75.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.005032
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-10K-1P",
            "NameChild": "RES 10.0 KOHM 1/20W 0201 1% SMD",
            "MNF": 8,
            "MJ": "pcs",
            "TotalPrice": 0.059544
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.0025
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-3K3-1P",
            "NameChild": "RES 3.30K OHM 1/16W 1% 0402 SMD",
            "MNF": 5,
            "MJ": "pcs",
            "TotalPrice": 0.007105
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-6K04-1P",
            "NameChild": "RES 6.04K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004298
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-200R-1P",
            "NameChild": "RES 200 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003562
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-0R0",
            "NameChild": "RES 0.0 OHM 1/20W 0201 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006498
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0402-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0804",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.018712
          },
          {
            "SKChild": 100,
            "RegNumberChild": "NCP716MT33TBG",
            "NameChild": "IC LDO 3V3  0.08A WDFN-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.222541
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CSG324C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 210 I/O, CSBGA324",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 31.645117
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FUSB301TMX",
            "NameChild": "IC USB TYPE-C Controller TMLP-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.451033
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FPF2290BUCX-F130",
            "NameChild": "IC OVER-VOLTAGE LOAD SWITCH 4.5A 2.5V-23V UFBGA-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.425387
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FUSB340TMX",
            "NameChild": "IC USB 3.1 5Gbps SuperSpeed Switch TMLP-18",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.540878
          },
          {
            "SKChild": 100,
            "RegNumberChild": "STM32F411CEY6TR",
            "NameChild": "IC ARM CORTEX-M4 Microcontroller 512KB Flash 128KB RAM WLCSP49",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.779347
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS22963CYZPT",
            "NameChild": "IC Load Switch ULOW DSBGA-6",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.529678
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SN74LVC1G14YZVR",
            "NameChild": "IC SNGL INV SCHMITT-TRIGGER DSBGA-4",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.101525
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-12",
            "NameChild": "IC REG MODULE BUCK SYNC 1.2V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.097449
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-18",
            "NameChild": "IC REG MODULE BUCK SYNC 1.8V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.130529
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB",
            "NameChild": "IC REG MODULE BUCK SYNC ADJ 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.124684
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-33",
            "NameChild": "IC REG MODULE BUCK SYNC 3.3V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.139954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MX25U6432FZNI02",
            "NameChild": "IC FLASH 64MBIT 133MHZ 1.8V 8WSON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.919723
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "24LC128T-I/MNY",
            "NameChild": "IC SERIAL EEPROM 128KBIT 8TDFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.688763
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CYUSB3014-BZXI",
            "NameChild": "IC ARM9 USB CONTROLLER 121BGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 12.777787
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "OSC-ASCO2-26.000MHZ-EK-T3",
            "NameChild": "Oscillator 26.000MHz, 1.6x1.2mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.001858
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-MAIN-TC",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 10.998367
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-REAR-TC-SUBASSM",
        "NameParent": "MC Rear Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-09-0481-22-08",
            "NameChild": "CONN RECEPT M9 8POS MALE PANEL/PCB IP67",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.525189
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-MAIN-TC-PCA",
            "NameChild": "MC Main board Type-C connector",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-CONN-PCA",
            "NameChild": "MC Connector Board",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-15X15X1-TGA3500",
            "NameChild": "Thermal pad 15x15x1mm, TG-A3500, 3.5W/m-K",
            "MNF": 0.5,
            "MJ": "pcs",
            "TotalPrice": 0.061139
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MC-REAR-TC-LP",
            "NameChild": "MECH MC Rear Type-C part with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-EMI-GSKT-4X6-T1",
            "NameChild": "MECH MC Foam EMI Gasket 4mm x 6mm x 1mm",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.407578
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MC-REAR-TC-LP",
        "NameParent": "MECH MC Rear Type-C part with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MC-REAR-TC",
            "NameChild": "MECH MC Rear Type-C part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LQJ-C Color Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-IR650-AR2X-D25",
            "NameChild": "25mm dia IR650 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 5.076839
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LQJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LQJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LQJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, Color, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MC023CG-SY-TC",
        "NameParent": "MC IMX174LQJ-C Color, USB3.1 Type-C camera, std.",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LQJ-C Color Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-REAR-TC-SUBASSM",
            "NameChild": "MC Rear Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MC023CG-SY-UB",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-CONN-PCA",
        "NameParent": "MC Connector Board",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006124
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0805-1N-1000V",
            "NameChild": "CAP CER 1000PF 1KV 10% X7R 0805 H<=1.45MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.174538
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-2U2-100V-X7R",
            "NameChild": "CAP CER 2.2UF 100V X7R 1206 H<=1.8MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.15601
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-22U-35V-X5R",
            "NameChild": "CAP CER 22UF 35V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.143472
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-FTM-103-02-L-DV",
            "NameChild": "CONN HEADER 6POS 1MM DUAL ROW VERTICAL SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.44
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.170348
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BZT52C3V6LP-7",
            "NameChild": "DIODE ZENER 3.6V 250MW DFN1006",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.132396
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SP1008-01WTG",
            "NameChild": "TVS Back to Back Diode 6V 6pF 0201",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.323056
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-ACP3225-102-2P",
            "NameChild": "CHOKE COMMON MODE 1000 OHM 1.2A 3.2 x 2.5mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.524329
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTC4365HD",
            "NameChild": "IC Overvoltage Undervoltage Reverse Supply Protection DFN-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.808043
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-CONN",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.582966
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-MINISMDC125F16-2",
            "NameChild": "Resetable PTC Fuse 1.25A 16V 1812 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210705
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011058
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1R0-1P",
            "NameChild": "RES 1.00 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001992
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-2M1-1P",
            "NameChild": "RES 2.10M OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004527
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.010794
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-82K-1P",
            "NameChild": "RES 82.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.005121
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100K-1P",
            "NameChild": "RES 100K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011367
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011664
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-220K-1P",
            "NameChild": "RES 220K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003192
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SI7220DN-T1-GE3",
            "NameChild": "MOSFET 2N-CH DUAL 60V 3.4A 1212-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.060445
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-MAIN-UB-PCA",
        "NameParent": "MC Main board Micro-B connector",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0201-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 10% 0201 H<=0.35MM",
            "MNF": 41,
            "MJ": "pcs",
            "TotalPrice": 0.440586
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 19,
            "MJ": "pcs",
            "TotalPrice": 1.976
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10N-100V",
            "NameChild": "CAP CER 10000PF 100V X7S 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.029224
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003062
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 35,
            "MJ": "pcs",
            "TotalPrice": 0.11473
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-470P-50V",
            "NameChild": "CAP CER 470pF 50V 10% X7R 0402 H<=0.50MM",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.010206
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SBR07U20LPS-7",
            "NameChild": "DIODE SBR 0.7A 20V 2-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.163719
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-0201-ST-.1-.53-3U-30",
            "NameChild": "DIODE SCHOTTKY 100mA 530mV 3uA 30V 0201",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.139214
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESDLC5V0D9",
            "NameChild": "DIODE ESD PROT 5V SOD923",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.060373
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-1U0-6V3-NFM18PC105",
            "NameChild": "CAP CER HF FILTER 1.0uF 6.3V 0603",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.073434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-897-10-010-00-300002",
            "NameChild": "CONN RCPT USB 3.0 MICRO-B VERTICAL SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.009717
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-CLM-103-02-L-D",
            "NameChild": "CONN HEADER 6POS DUAL ROW 1.0MM TOP ENTRY",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.117965
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.019143
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-80R-1.5A",
            "NameChild": "FERRITE CHIP 80 OHMS 1.5A 0402",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.090954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.035076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-75K-1P",
            "NameChild": "RES 75.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.005032
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.0025
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-3K3-1P",
            "NameChild": "RES 3.30K OHM 1/16W 1% 0402 SMD",
            "MNF": 5,
            "MJ": "pcs",
            "TotalPrice": 0.007105
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-10K-1P",
            "NameChild": "RES 10.0 KOHM 1/20W 0201 1% SMD",
            "MNF": 8,
            "MJ": "pcs",
            "TotalPrice": 0.059544
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-6K04-1P",
            "NameChild": "RES 6.04K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004298
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-200R-1P",
            "NameChild": "RES 200 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003562
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-0R0",
            "NameChild": "RES 0.0 OHM 1/20W 0201 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006498
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0402-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0804",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.018712
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CSG324C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 210 I/O, CSBGA324",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 31.645117
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESD8004MUTAG",
            "NameChild": "TVS Array Quad 3.3V 0.4pF",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.275751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FPF2290BUCX-F130",
            "NameChild": "IC OVER-VOLTAGE LOAD SWITCH 4.5A 2.5V-23V UFBGA-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.425387
          },
          {
            "SKChild": 100,
            "RegNumberChild": "STM32F411CEY6TR",
            "NameChild": "IC ARM CORTEX-M4 Microcontroller 512KB Flash 128KB RAM WLCSP49",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.779347
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS22963CYZPT",
            "NameChild": "IC Load Switch ULOW DSBGA-6",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.529678
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SN74LVC1G14YZVR",
            "NameChild": "IC SNGL INV SCHMITT-TRIGGER DSBGA-4",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.101525
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-33",
            "NameChild": "IC REG MODULE BUCK SYNC 3.3V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.139954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-18",
            "NameChild": "IC REG MODULE BUCK SYNC 1.8V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.130529
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB",
            "NameChild": "IC REG MODULE BUCK SYNC ADJ 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.124684
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MX25U6432FZNI02",
            "NameChild": "IC FLASH 64MBIT 133MHZ 1.8V 8WSON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.919723
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-12",
            "NameChild": "IC REG MODULE BUCK SYNC 1.2V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.097449
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CYUSB3014-BZXI",
            "NameChild": "IC ARM9 USB CONTROLLER 121BGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 12.777787
          },
          {
            "SKChild": 100,
            "RegNumberChild": "24LC128T-I/MNY",
            "NameChild": "IC SERIAL EEPROM 128KBIT 8TDFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.688763
          },
          {
            "SKChild": 100,
            "RegNumberChild": "OSC-ASCO2-26.000MHZ-EK-T3",
            "NameChild": "Oscillator 26.000MHz, 1.6x1.2mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.001858
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-MAIN-UB",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.504954
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-REAR-UB-SUBASSM",
        "NameParent": "MC Micro-B Rear Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-09-0481-22-08",
            "NameChild": "CONN RECEPT M9 8POS MALE PANEL/PCB IP67",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.525189
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-MAIN-UB-PCA",
            "NameChild": "MC Main board Micro-B connector",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-CONN-PCA",
            "NameChild": "MC Connector Board",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-EMI-GSKT-1.3X2.3X11",
            "NameChild": "GASKET EMI PSA FOF RECT 1.3MMx2.3MMx11MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.020118
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-15X15X1-TGA3500",
            "NameChild": "Thermal pad 15x15x1mm, TG-A3500, 3.5W/m-K",
            "MNF": 0.5,
            "MJ": "pcs",
            "TotalPrice": 0.061139
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MC-REAR-UB-LP",
            "NameChild": "MECH MC Rear Micro-B part with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-EMI-GSKT-4X6-T1",
            "NameChild": "MECH MC Foam EMI Gasket 4mm x 6mm x 1mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.203789
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MC-REAR-UB-LP",
        "NameParent": "MECH MC Rear Micro-B part with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MC-REAR-UB",
            "NameChild": "MECH MC Rear Micro-B part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LQJ-C Color Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-IR650-AR2X-D25",
            "NameChild": "25mm dia IR650 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 5.076839
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LQJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LQJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LQJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, Color, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MC023CG-SY-UB",
        "NameParent": "MC IMX174LQJ-C Color, USB3.0 camera, std.",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LQJ-C Color Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-REAR-UB-SUBASSM",
            "NameChild": "MC Micro-B Rear Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MC023MG-SY-FL",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-MAIN-FL-PCA",
        "NameParent": "MC Main board Flex Line, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0201-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 10% 0201 H<=0.35MM",
            "MNF": 39,
            "MJ": "pcs",
            "TotalPrice": 0.419094
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 19,
            "MJ": "pcs",
            "TotalPrice": 1.976
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10N-100V",
            "NameChild": "CAP CER 10000PF 100V X7S 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.029224
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003062
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 37,
            "MJ": "pcs",
            "TotalPrice": 0.121286
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-470P-50V",
            "NameChild": "CAP CER 470pF 50V 10% X7R 0402 H<=0.50MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003402
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SBR07U20LPS-7",
            "NameChild": "DIODE SBR 0.7A 20V 2-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.163719
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.085174
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BZT52C3V6LP-7",
            "NameChild": "DIODE ZENER 3.6V 250MW DFN1006",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.132396
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-1U0-6V3-NFM18PC105",
            "NameChild": "CAP CER HF FILTER 1.0uF 6.3V 0603",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.073434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-502244-1530",
            "NameChild": "CONN FPC/FFC ZIF For LVDS 15POS 0.5MM HORIZ Bottom Contact SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.717512
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.019143
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-80R-1.5A",
            "NameChild": "FERRITE CHIP 80 OHMS 1.5A 0402",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.090954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.035076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-3K3-1P",
            "NameChild": "RES 3.30K OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.008526
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.0025
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-10K-1P",
            "NameChild": "RES 10.0 KOHM 1/20W 0201 1% SMD",
            "MNF": 8,
            "MJ": "pcs",
            "TotalPrice": 0.059544
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.009006
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-75K-1P",
            "NameChild": "RES 75.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002516
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-4K99-1P",
            "NameChild": "RES 4.99 KOHM 1/20W 0201 1% SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.00579
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-6K04-1P",
            "NameChild": "RES 6.04K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004298
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-200R-1P",
            "NameChild": "RES 200 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003562
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-0R0",
            "NameChild": "RES 0.0 OHM 1/20W 0201 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006498
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0402-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0804",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.009356
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          },
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CSG324C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 210 I/O, CSBGA324",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 31.645117
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESD8004MUTAG",
            "NameChild": "TVS Array Quad 3.3V 0.4pF",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.275751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FPF2290BUCX-F130",
            "NameChild": "IC OVER-VOLTAGE LOAD SWITCH 4.5A 2.5V-23V UFBGA-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.425387
          },
          {
            "SKChild": 100,
            "RegNumberChild": "STM32F411CEY6TR",
            "NameChild": "IC ARM CORTEX-M4 Microcontroller 512KB Flash 128KB RAM WLCSP49",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.779347
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-33",
            "NameChild": "IC REG MODULE BUCK SYNC 3.3V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.139954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-18",
            "NameChild": "IC REG MODULE BUCK SYNC 1.8V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.130529
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB",
            "NameChild": "IC REG MODULE BUCK SYNC ADJ 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.124684
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MX25U6432FZNI02",
            "NameChild": "IC FLASH 64MBIT 133MHZ 1.8V 8WSON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.919723
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-12",
            "NameChild": "IC REG MODULE BUCK SYNC 1.2V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.097449
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CYUSB3014-BZXI",
            "NameChild": "IC ARM9 USB CONTROLLER 121BGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 12.777787
          },
          {
            "SKChild": 100,
            "RegNumberChild": "24LC128T-I/MNY",
            "NameChild": "IC SERIAL EEPROM 128KBIT 8TDFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.688763
          },
          {
            "SKChild": 100,
            "RegNumberChild": "OSC-ASCO2-26.000MHZ-EK-T3",
            "NameChild": "Oscillator 26.000MHz, 1.6x1.2mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.001858
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-MAIN-FL",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.121426
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-REAR-FL-SUBASSM",
        "NameParent": "MC Flex-Line Rear Subassembly, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MC-MAIN-FL-PCA",
            "NameChild": "MC Main board Flex Line, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-15X15X1-TGA3500",
            "NameChild": "Thermal pad 15x15x1mm, TG-A3500, 3.5W/m-K",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.122277
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MC-REAR-FL-LP",
            "NameChild": "MECH MC Rear Flex-Line part with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MC-REAR-FL-LP",
        "NameParent": "MECH MC Rear Flex-Line part with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MC-REAR-FL",
            "NameChild": "MECH MC Rear Flex-Line part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LLJ-C B/W Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-BK7-AR2X-D25",
            "NameChild": "25mm dia BK7 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.284358
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LLJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LLJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LLJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, B/W, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MC023MG-SY-FL",
        "NameParent": "MC IMX174LLJ-C B/W USB3.0 camera, Flex-Line, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LLJ-C B/W Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-REAR-FL-SUBASSM",
            "NameChild": "MC Flex-Line Rear Subassembly, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X10-CUST",
            "NameChild": "M2x10, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.031656
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MC023MG-SY-TC",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-CONN-PCA",
        "NameParent": "MC Connector Board",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006124
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0805-1N-1000V",
            "NameChild": "CAP CER 1000PF 1KV 10% X7R 0805 H<=1.45MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.174538
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-2U2-100V-X7R",
            "NameChild": "CAP CER 2.2UF 100V X7R 1206 H<=1.8MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.15601
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-22U-35V-X5R",
            "NameChild": "CAP CER 22UF 35V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.143472
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-FTM-103-02-L-DV",
            "NameChild": "CONN HEADER 6POS 1MM DUAL ROW VERTICAL SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.44
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.170348
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BZT52C3V6LP-7",
            "NameChild": "DIODE ZENER 3.6V 250MW DFN1006",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.132396
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SP1008-01WTG",
            "NameChild": "TVS Back to Back Diode 6V 6pF 0201",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.323056
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-ACP3225-102-2P",
            "NameChild": "CHOKE COMMON MODE 1000 OHM 1.2A 3.2 x 2.5mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.524329
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTC4365HD",
            "NameChild": "IC Overvoltage Undervoltage Reverse Supply Protection DFN-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.808043
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-CONN",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.582966
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-MINISMDC125F16-2",
            "NameChild": "Resetable PTC Fuse 1.25A 16V 1812 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210705
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011058
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1R0-1P",
            "NameChild": "RES 1.00 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001992
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-2M1-1P",
            "NameChild": "RES 2.10M OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004527
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.010794
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-82K-1P",
            "NameChild": "RES 82.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.005121
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100K-1P",
            "NameChild": "RES 100K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011367
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011664
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-220K-1P",
            "NameChild": "RES 220K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003192
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SI7220DN-T1-GE3",
            "NameChild": "MOSFET 2N-CH DUAL 60V 3.4A 1212-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.060445
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-MAIN-TC-PCA",
        "NameParent": "MC Main board Type-C connector",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-2U2-6V3",
            "NameChild": "CAP CER 2.2UF 6.3V X5R 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.00245
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 36,
            "MJ": "pcs",
            "TotalPrice": 0.118008
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-100U-6V3-X5R",
            "NameChild": "CAP CER 100UF 6.3V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.054059
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-470P-50V",
            "NameChild": "CAP CER 470pF 50V 10% X7R 0402 H<=0.50MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0201-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 10% 0201 H<=0.35MM",
            "MNF": 41,
            "MJ": "pcs",
            "TotalPrice": 0.440586
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10N-100V",
            "NameChild": "CAP CER 10000PF 100V X7S 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.029224
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 16,
            "MJ": "pcs",
            "TotalPrice": 1.664
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003062
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.002552
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-0201-ST-.1-.53-3U-30",
            "NameChild": "DIODE SCHOTTKY 100mA 530mV 3uA 30V 0201",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.139214
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SBR07U20LPS-7",
            "NameChild": "DIODE SBR 0.7A 20V 2-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.163719
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESDLC5V0D9",
            "NameChild": "DIODE ESD PROT 5V SOD923",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.060373
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-1U0-6V3-NFM18PC105",
            "NameChild": "CAP CER HF FILTER 1.0uF 6.3V 0603",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.073434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-CNG001S130R",
            "NameChild": "CONN USB TYPE-C VERT SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.731645
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-CLM-103-02-L-D",
            "NameChild": "CONN HEADER 6POS DUAL ROW 1.0MM TOP ENTRY",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.117965
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.019143
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-80R-1.5A",
            "NameChild": "FERRITE CHIP 80 OHMS 1.5A 0402",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.090954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.035076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-75K-1P",
            "NameChild": "RES 75.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.005032
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-10K-1P",
            "NameChild": "RES 10.0 KOHM 1/20W 0201 1% SMD",
            "MNF": 8,
            "MJ": "pcs",
            "TotalPrice": 0.059544
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.0025
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-3K3-1P",
            "NameChild": "RES 3.30K OHM 1/16W 1% 0402 SMD",
            "MNF": 5,
            "MJ": "pcs",
            "TotalPrice": 0.007105
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-6K04-1P",
            "NameChild": "RES 6.04K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004298
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-200R-1P",
            "NameChild": "RES 200 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003562
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-0R0",
            "NameChild": "RES 0.0 OHM 1/20W 0201 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006498
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0402-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0804",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.018712
          },
          {
            "SKChild": 100,
            "RegNumberChild": "NCP716MT33TBG",
            "NameChild": "IC LDO 3V3  0.08A WDFN-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.222541
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CSG324C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 210 I/O, CSBGA324",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 31.645117
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FUSB301TMX",
            "NameChild": "IC USB TYPE-C Controller TMLP-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.451033
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FPF2290BUCX-F130",
            "NameChild": "IC OVER-VOLTAGE LOAD SWITCH 4.5A 2.5V-23V UFBGA-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.425387
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FUSB340TMX",
            "NameChild": "IC USB 3.1 5Gbps SuperSpeed Switch TMLP-18",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.540878
          },
          {
            "SKChild": 100,
            "RegNumberChild": "STM32F411CEY6TR",
            "NameChild": "IC ARM CORTEX-M4 Microcontroller 512KB Flash 128KB RAM WLCSP49",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.779347
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS22963CYZPT",
            "NameChild": "IC Load Switch ULOW DSBGA-6",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.529678
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SN74LVC1G14YZVR",
            "NameChild": "IC SNGL INV SCHMITT-TRIGGER DSBGA-4",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.101525
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-12",
            "NameChild": "IC REG MODULE BUCK SYNC 1.2V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.097449
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-18",
            "NameChild": "IC REG MODULE BUCK SYNC 1.8V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.130529
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB",
            "NameChild": "IC REG MODULE BUCK SYNC ADJ 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.124684
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-33",
            "NameChild": "IC REG MODULE BUCK SYNC 3.3V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.139954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MX25U6432FZNI02",
            "NameChild": "IC FLASH 64MBIT 133MHZ 1.8V 8WSON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.919723
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "24LC128T-I/MNY",
            "NameChild": "IC SERIAL EEPROM 128KBIT 8TDFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.688763
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CYUSB3014-BZXI",
            "NameChild": "IC ARM9 USB CONTROLLER 121BGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 12.777787
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "OSC-ASCO2-26.000MHZ-EK-T3",
            "NameChild": "Oscillator 26.000MHz, 1.6x1.2mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.001858
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-MAIN-TC",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 10.998367
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-REAR-TC-SUBASSM",
        "NameParent": "MC Rear Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-09-0481-22-08",
            "NameChild": "CONN RECEPT M9 8POS MALE PANEL/PCB IP67",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.525189
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-MAIN-TC-PCA",
            "NameChild": "MC Main board Type-C connector",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-CONN-PCA",
            "NameChild": "MC Connector Board",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-15X15X1-TGA3500",
            "NameChild": "Thermal pad 15x15x1mm, TG-A3500, 3.5W/m-K",
            "MNF": 0.5,
            "MJ": "pcs",
            "TotalPrice": 0.061139
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MC-REAR-TC-LP",
            "NameChild": "MECH MC Rear Type-C part with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-EMI-GSKT-4X6-T1",
            "NameChild": "MECH MC Foam EMI Gasket 4mm x 6mm x 1mm",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.407578
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MC-REAR-TC-LP",
        "NameParent": "MECH MC Rear Type-C part with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MC-REAR-TC",
            "NameChild": "MECH MC Rear Type-C part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LLJ-C B/W Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-BK7-AR2X-D25",
            "NameChild": "25mm dia BK7 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.284358
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LLJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LLJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LLJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, B/W, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MC023MG-SY-TC",
        "NameParent": "MC IMX174LLJ-C B/W, USB3.1 Type-C camera, std.",
        "Position": 2,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LLJ-C B/W Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-REAR-TC-SUBASSM",
            "NameChild": "MC Rear Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MC023MG-SY-UB",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-CONN-PCA",
        "NameParent": "MC Connector Board",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006124
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0805-1N-1000V",
            "NameChild": "CAP CER 1000PF 1KV 10% X7R 0805 H<=1.45MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.174538
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-2U2-100V-X7R",
            "NameChild": "CAP CER 2.2UF 100V X7R 1206 H<=1.8MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.15601
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-22U-35V-X5R",
            "NameChild": "CAP CER 22UF 35V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.143472
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-FTM-103-02-L-DV",
            "NameChild": "CONN HEADER 6POS 1MM DUAL ROW VERTICAL SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.44
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.170348
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BZT52C3V6LP-7",
            "NameChild": "DIODE ZENER 3.6V 250MW DFN1006",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.132396
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SP1008-01WTG",
            "NameChild": "TVS Back to Back Diode 6V 6pF 0201",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.323056
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-ACP3225-102-2P",
            "NameChild": "CHOKE COMMON MODE 1000 OHM 1.2A 3.2 x 2.5mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.524329
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTC4365HD",
            "NameChild": "IC Overvoltage Undervoltage Reverse Supply Protection DFN-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.808043
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-CONN",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.582966
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-MINISMDC125F16-2",
            "NameChild": "Resetable PTC Fuse 1.25A 16V 1812 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210705
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011058
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1R0-1P",
            "NameChild": "RES 1.00 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001992
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-2M1-1P",
            "NameChild": "RES 2.10M OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004527
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.010794
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-82K-1P",
            "NameChild": "RES 82.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.005121
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100K-1P",
            "NameChild": "RES 100K OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011367
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.011664
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-220K-1P",
            "NameChild": "RES 220K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003192
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SI7220DN-T1-GE3",
            "NameChild": "MOSFET 2N-CH DUAL 60V 3.4A 1212-8",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.060445
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-MAIN-UB-PCA",
        "NameParent": "MC Main board Micro-B connector",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0201-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 10% 0201 H<=0.35MM",
            "MNF": 41,
            "MJ": "pcs",
            "TotalPrice": 0.440586
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 19,
            "MJ": "pcs",
            "TotalPrice": 1.976
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10N-100V",
            "NameChild": "CAP CER 10000PF 100V X7S 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.029224
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003062
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 35,
            "MJ": "pcs",
            "TotalPrice": 0.11473
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-470P-50V",
            "NameChild": "CAP CER 470pF 50V 10% X7R 0402 H<=0.50MM",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.010206
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-SBR07U20LPS-7",
            "NameChild": "DIODE SBR 0.7A 20V 2-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.163719
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-0201-ST-.1-.53-3U-30",
            "NameChild": "DIODE SCHOTTKY 100mA 530mV 3uA 30V 0201",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.139214
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESDLC5V0D9",
            "NameChild": "DIODE ESD PROT 5V SOD923",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.060373
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-1U0-6V3-NFM18PC105",
            "NameChild": "CAP CER HF FILTER 1.0uF 6.3V 0603",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 0.073434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-897-10-010-00-300002",
            "NameChild": "CONN RCPT USB 3.0 MICRO-B VERTICAL SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.009717
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-CLM-103-02-L-D",
            "NameChild": "CONN HEADER 6POS DUAL ROW 1.0MM TOP ENTRY",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.117965
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.019143
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-80R-1.5A",
            "NameChild": "FERRITE CHIP 80 OHMS 1.5A 0402",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.090954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.035076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-75K-1P",
            "NameChild": "RES 75.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.005032
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.0025
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-3K3-1P",
            "NameChild": "RES 3.30K OHM 1/16W 1% 0402 SMD",
            "MNF": 5,
            "MJ": "pcs",
            "TotalPrice": 0.007105
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-10K-1P",
            "NameChild": "RES 10.0 KOHM 1/20W 0201 1% SMD",
            "MNF": 8,
            "MJ": "pcs",
            "TotalPrice": 0.059544
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-6K04-1P",
            "NameChild": "RES 6.04K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004298
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-200R-1P",
            "NameChild": "RES 200 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003562
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0201-0R0",
            "NameChild": "RES 0.0 OHM 1/20W 0201 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006498
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0402-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0804",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.018712
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CSG324C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 210 I/O, CSBGA324",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 31.645117
          },
          {
            "SKChild": 100,
            "RegNumberChild": "ESD8004MUTAG",
            "NameChild": "TVS Array Quad 3.3V 0.4pF",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.275751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FPF2290BUCX-F130",
            "NameChild": "IC OVER-VOLTAGE LOAD SWITCH 4.5A 2.5V-23V UFBGA-12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.425387
          },
          {
            "SKChild": 100,
            "RegNumberChild": "STM32F411CEY6TR",
            "NameChild": "IC ARM CORTEX-M4 Microcontroller 512KB Flash 128KB RAM WLCSP49",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.779347
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS22963CYZPT",
            "NameChild": "IC Load Switch ULOW DSBGA-6",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.529678
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SN74LVC1G14YZVR",
            "NameChild": "IC SNGL INV SCHMITT-TRIGGER DSBGA-4",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.101525
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-33",
            "NameChild": "IC REG MODULE BUCK SYNC 3.3V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.139954
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-18",
            "NameChild": "IC REG MODULE BUCK SYNC 1.8V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.130529
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB",
            "NameChild": "IC REG MODULE BUCK SYNC ADJ 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.124684
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MX25U6432FZNI02",
            "NameChild": "IC FLASH 64MBIT 133MHZ 1.8V 8WSON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.919723
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MPM3810GQB-12",
            "NameChild": "IC REG MODULE BUCK SYNC 1.2V 1A QFN12",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.097449
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CYUSB3014-BZXI",
            "NameChild": "IC ARM9 USB CONTROLLER 121BGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 12.777787
          },
          {
            "SKChild": 100,
            "RegNumberChild": "24LC128T-I/MNY",
            "NameChild": "IC SERIAL EEPROM 128KBIT 8TDFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.688763
          },
          {
            "SKChild": 100,
            "RegNumberChild": "OSC-ASCO2-26.000MHZ-EK-T3",
            "NameChild": "Oscillator 26.000MHz, 1.6x1.2mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 1.001858
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MC-MAIN-UB",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.504954
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MC-REAR-UB-SUBASSM",
        "NameParent": "MC Micro-B Rear Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-09-0481-22-08",
            "NameChild": "CONN RECEPT M9 8POS MALE PANEL/PCB IP67",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.525189
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-MAIN-UB-PCA",
            "NameChild": "MC Main board Micro-B connector",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-CONN-PCA",
            "NameChild": "MC Connector Board",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-EMI-GSKT-1.3X2.3X11",
            "NameChild": "GASKET EMI PSA FOF RECT 1.3MMx2.3MMx11MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.020118
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-15X15X1-TGA3500",
            "NameChild": "Thermal pad 15x15x1mm, TG-A3500, 3.5W/m-K",
            "MNF": 0.5,
            "MJ": "pcs",
            "TotalPrice": 0.061139
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MC-REAR-UB-LP",
            "NameChild": "MECH MC Rear Micro-B part with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-EMI-GSKT-4X6-T1",
            "NameChild": "MECH MC Foam EMI Gasket 4mm x 6mm x 1mm",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.203789
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MC-REAR-UB-LP",
        "NameParent": "MECH MC Rear Micro-B part with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MC-REAR-UB",
            "NameChild": "MECH MC Rear Micro-B part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LLJ-C B/W Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-BK7-AR2X-D25",
            "NameChild": "25mm dia BK7 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.284358
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LLJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LLJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LLJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, B/W, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MC023MG-SY-UB",
        "NameParent": "MC IMX174LLJ-C B/W, USB3.0 camera, std.",
        "Position": 2,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LLJ-C B/W Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MC-REAR-UB-SUBASSM",
            "NameChild": "MC Micro-B Rear Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MX023CG-SY-X2G2-FL",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MX-X2G2-REAR-LP",
        "NameParent": "MECH Part MX X2G2 Rear with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MX-X2G2-REAR",
            "NameChild": "MECH Part MX X2G2 Rear",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.0177
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LQJ-C Color Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-IR650-AR2X-D25",
            "NameChild": "25mm dia IR650 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 5.076839
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LQJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023CG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LQJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LQJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, Color, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MX-X2G2-MAIN-FL-PCA",
        "NameParent": "MX Main board X2G2 PCIe, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-2U2-6V3",
            "NameChild": "CAP CER 2.2UF 6.3V X5R 0402 H<=0.55MM",
            "MNF": 24,
            "MJ": "pcs",
            "TotalPrice": 0.0588
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 15,
            "MJ": "pcs",
            "TotalPrice": 1.56
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 9,
            "MJ": "pcs",
            "TotalPrice": 0.011484
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-1N-50V",
            "NameChild": "CAP CER 1nF 50V 10% X7R 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006394
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-4U7-35V-X5R",
            "NameChild": "CAP CER 4.7UF 35V 10% X5R 0603 H<=1.00MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.046868
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-22U-35V-X5R",
            "NameChild": "CAP CER 22UF 35V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.143472
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.012248
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.085174
          },
          {
            "SKChild": 100,
            "RegNumberChild": "BZX884-B2V7",
            "NameChild": "DIODE ZENER 250MW 2.7V SOD882",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.057578
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-502244-2430",
            "NameChild": "CONN FPC/FFC ZIF 24POS 0.5MM HORIZ BOTTOM CONTACT SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.889418
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.076572
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-XFL3012-102ME",
            "NameChild": "Coilcraft, 1uH, 2.6A, XFL3012 Series Shielded Power Inductors",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 1.224462
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-1U0-DFE18SAN1R0MG0",
            "NameChild": "INDUCTOR SHIELDED POWER 1.0UH 1.7A 20% 0603 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.142895
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-BLM15PX121SN1D",
            "NameChild": "Inductor Ferrite Bead 120R/100MHz 2A 0402",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.01552
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-560K-1P",
            "NameChild": "RES 560K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004916
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-140K-1P",
            "NameChild": "RES 140K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.000854
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-33K-1P",
            "NameChild": "RES 33.0K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.00376
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100K-1P",
            "NameChild": "RES 100K OHM 1/16W 1% 0402 SMD",
            "MNF": 7,
            "MJ": "pcs",
            "TotalPrice": 0.026523
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-60K4-1P",
            "NameChild": "RES 60.4K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001559
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-261K-1P",
            "NameChild": "RES 261.0K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003168
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007776
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003598
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007372
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 7,
            "MJ": "pcs",
            "TotalPrice": 0.013356
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.005
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-240R-1P",
            "NameChild": "RES 240 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 5,
            "MJ": "pcs",
            "TotalPrice": 0.02923
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0201-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0502",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.084144
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          },
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTC3315AIV",
            "NameChild": "IC Synchronous Dual Step-Down DC-DC Converter, ADJ 2A LQFN-12",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 6.241272
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CPG236C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 106 I/O, CSBGA236",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 35.373238
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS3895ADRYR",
            "NameChild": "IC ADJ SUPERVISOR SON-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.368346
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPD4E004DRYR",
            "NameChild": "IC ESD-PROT ARRAY 4CH 6-SON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.127014
          },
          {
            "SKChild": 100,
            "RegNumberChild": "EMIF04-1K030F3",
            "NameChild": "RC PI EMI Filter 1K/24pF WFBGA-9",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.382235
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "S25FL128SAGBHI200",
            "NameChild": "IC FLASH 128MBIT 133MHz BGA24",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.552054
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTM8065",
            "NameChild": "IC REG DC-DC 2.5A 40V ADJ",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 11.629422
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MX-X2G2-MAIN",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.143757
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MX-X2G2-REAR-FL-SUBASSM",
        "NameParent": "MX X2G2 Rear Subassembly, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MX-X2G2-MAIN-FL-PCA",
            "NameChild": "MX Main board X2G2 PCIe, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MX-X2G2-REAR-LP",
            "NameChild": "MECH Part MX X2G2 Rear with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-10X10X1-TGA6200",
            "NameChild": "Thermal pad 10x10x1.0mm, TG-A6200, 6.2W/m-K",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.103214
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MX023CG-SY-X2G2-FL",
        "NameParent": "MX IMX174LQJ-C Color PCIe X2G2 Camera, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MX-X2G2-REAR-FL-SUBASSM",
            "NameChild": "MX X2G2 Rear Subassembly, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023CG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LQJ-C Color Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X10-CUST",
            "NameChild": "M2x10, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.031656
          }
        ]
      }
    ]
  },
  //***********************/
  {
    "Name": "MX023MG-SY-X2G2-FL",
    "Structure": [
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-MX-X2G2-REAR-LP",
        "NameParent": "MECH Part MX X2G2 Rear with Light Pipes",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MX-X2G2-REAR",
            "NameChild": "MECH Part MX X2G2 Rear",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.0177
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-LIGHTPIPE-1.63X4.14",
            "NameChild": "LIGHTPIPE DIA 1.63MM LENGTH 4.14MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.920484
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MECH-O-RING-22X1-VI370-CL",
        "NameParent": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-O-RING-22X1-VI370",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.109396
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-FRONT-SUBASSM",
        "NameParent": "MT IMX174LLJ-C B/W Front Subassembly",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "FLT-BK7-AR2X-D25",
            "NameChild": "25mm dia BK7 ARx2",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.284358
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT-MID-023",
            "NameChild": "MECH MT023 Middle Part",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 4.709304
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-PR-SENSOR-PCA",
            "NameChild": "MT IMX174LLJ-C Sensor Board PCA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M1.6X3-SLOT-STNLS",
            "NameChild": "DIN 84 M1.6x3 Slot Cheese, Stainless, Screw",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.140212
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-FRONT",
            "NameChild": "MECH Part MQ Front",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.299751
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MQ-CS-C",
            "NameChild": "MECH Part MQ Middle, extending focal distance from CS to C mount",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.2978
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X14-CUST",
            "NameChild": "M2x14, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.034804
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-MT023XG-SY-GSKT",
            "NameChild": "MECH MT023xG-SY sensor front antidust gasket",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.59785
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-O-RING-22X1-VI370-CL",
            "NameChild": "Filter glass O-Ring, 22x1mm, FKM, Vi370, black, cleaned",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "MECH-C-MOUNT-CAP",
            "NameChild": "Plastic C-Mount Protective Cap",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.700685
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MT023MG-PR-SENSOR-PCA",
        "NameParent": "MT IMX174LLJ-C Sensor Board PCA",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-4U7-6.3V-X5R",
            "NameChild": "CAP CER 4.7uF 6.3V 20% X5R 0402 H<=0.50MM",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.019668
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 31,
            "MJ": "pcs",
            "TotalPrice": 0.039556
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U22-25V-X5R",
            "NameChild": "CAP CER 0.22UF 25V 20% X5R 0402",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.01331
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-10U-6V3-LOW",
            "NameChild": "CAP CER 10UF 6.3V X5R 20% 0603 H<=0.50MM",
            "MNF": 43,
            "MJ": "pcs",
            "TotalPrice": 1.69076
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40HC(2.5)-60DS",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.984302
          },
          {
            "SKChild": 100,
            "RegNumberChild": "DS2411R",
            "NameChild": "IC Serial Number Registration Silicon Serial Number 1.8V SOT-23",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.779841
          },
          {
            "SKChild": 100,
            "RegNumberChild": "IMX174LLJ-C",
            "NameChild": "CMOS 2.35Mpix, 1/1.2, B/W, GS",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 123.95
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-120R-3A",
            "NameChild": "FERRITE CHIP 120 OHMS 3.0A 0603",
            "MNF": 6,
            "MJ": "pcs",
            "TotalPrice": 0.172158
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LT1965EDD-3.3#PBF",
            "NameChild": "IC REG LDO 3.3V 1.1A 8-DFN",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.088703
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MT-PR-SENSOR",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.821405
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.003816
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007196
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10R-1P",
            "NameChild": "RES 10.0 OHM 1/16W 1% 0402 SMD",
            "MNF": 12,
            "MJ": "pcs",
            "TotalPrice": 0.032184
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TMP112",
            "NameChild": "IC TEMP SENSOR DGTL 5V SOT563",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.672325
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003686
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MX-X2G2-MAIN-FL-PCA",
        "NameParent": "MX Main board X2G2 PCIe, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-2U2-6V3",
            "NameChild": "CAP CER 2.2UF 6.3V X5R 0402 H<=0.55MM",
            "MNF": 24,
            "MJ": "pcs",
            "TotalPrice": 0.0588
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-22U-16V-X5R-H080",
            "NameChild": "CAP CER 22uF 16V X5R 0603 H<=0.80MM",
            "MNF": 15,
            "MJ": "pcs",
            "TotalPrice": 1.56
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-U10-25V-X5R",
            "NameChild": "CAP CER .1UF 25V X5R 0402 H<=0.55MM",
            "MNF": 9,
            "MJ": "pcs",
            "TotalPrice": 0.011484
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-1N-50V",
            "NameChild": "CAP CER 1nF 50V 10% X7R 0402 H<=0.55MM",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.006394
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0603-4U7-35V-X5R",
            "NameChild": "CAP CER 4.7UF 35V 10% X5R 0603 H<=1.00MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.046868
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-1206-22U-35V-X5R",
            "NameChild": "CAP CER 22UF 35V X5R 1206 H<=1.8MM",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.143472
          },
          {
            "SKChild": 100,
            "RegNumberChild": "C-0402-10P-50V",
            "NameChild": "CAP CER 10PF 50V 5% C0G 0402 H<=0.55MM",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.012248
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-RED",
            "NameChild": "LED RED/CLEAR 636NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.116201
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-GRN",
            "NameChild": "LED GRN/CLEAR 574NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.077968
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-BLUE",
            "NameChild": "LED BLUE/CLEAR 470NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.07721
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LED-0402-AMBER",
            "NameChild": "LED AMBER/CLEAR 590NM 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.053593
          },
          {
            "SKChild": 100,
            "RegNumberChild": "D-BAS40LP-7",
            "NameChild": "DIODE SCHOTTKY 40V DFN1006-2",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.085174
          },
          {
            "SKChild": 100,
            "RegNumberChild": "BZX884-B2V7",
            "NameChild": "DIODE ZENER 250MW 2.7V SOD882",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.057578
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PTC-0603-0.036A-24V",
            "NameChild": "Resetable PTC Fuse 36mA 24V SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.084363
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-502244-2430",
            "NameChild": "CONN FPC/FFC ZIF 24POS 0.5MM HORIZ BOTTOM CONTACT SMT",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.889418
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-60DP-0.4V(51)",
            "NameChild": "CONN RCPT 60POS 0.4MM SMD GOLD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.786434
          },
          {
            "SKChild": 100,
            "RegNumberChild": "CONN-DF40C-20DS-0.4V(51)",
            "NameChild": "CONN RCPT 20POS 0.4MM SMD GOLD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.223696
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-220R-2A",
            "NameChild": "FERRITE CHIP 220 OHMS 2.0A 0603",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.076572
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-XFL3012-102ME",
            "NameChild": "Coilcraft, 1uH, 2.6A, XFL3012 Series Shielded Power Inductors",
            "MNF": 3,
            "MJ": "pcs",
            "TotalPrice": 1.224462
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0603-1U0-DFE18SAN1R0MG0",
            "NameChild": "INDUCTOR SHIELDED POWER 1.0UH 1.7A 20% 0603 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.142895
          },
          {
            "SKChild": 100,
            "RegNumberChild": "L-0402-BLM15PX121SN1D",
            "NameChild": "Inductor Ferrite Bead 120R/100MHz 2A 0402",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.01552
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-560K-1P",
            "NameChild": "RES 560K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004916
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-140K-1P",
            "NameChild": "RES 140K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.000854
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-33K-1P",
            "NameChild": "RES 33.0K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.00376
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100K-1P",
            "NameChild": "RES 100K OHM 1/16W 1% 0402 SMD",
            "MNF": 7,
            "MJ": "pcs",
            "TotalPrice": 0.026523
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-60K4-1P",
            "NameChild": "RES 60.4K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001559
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-261K-1P",
            "NameChild": "RES 261.0K OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003168
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-100R-1P",
            "NameChild": "RES 100 OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007776
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-10K-1P",
            "NameChild": "RES 10.0K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.003598
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-150R-1P",
            "NameChild": "RES 150 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002888
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-1K0-1P",
            "NameChild": "RES 1.00K OHM 1/16W 1% 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.007372
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-4K99-1P",
            "NameChild": "RES 4.99K OHM 1/16W 1% 0402 SMD",
            "MNF": 7,
            "MJ": "pcs",
            "TotalPrice": 0.013356
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-0R0-1P",
            "NameChild": "RES 0.0 OHM 1/10W 0402 SMD",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.005
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-620R-1P",
            "NameChild": "RES 620 OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.002677
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-240R-1P",
            "NameChild": "RES 240 OHM 1/10W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.001584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-49K9-1P",
            "NameChild": "RES 49.9K OHM 1/16W 1% 0402 SMD",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.004503
          },
          {
            "SKChild": 100,
            "RegNumberChild": "R-0402-330R-1P",
            "NameChild": "RES 330 OHM 1/16W 1% 0402 SMD",
            "MNF": 5,
            "MJ": "pcs",
            "TotalPrice": 0.02923
          },
          {
            "SKChild": 100,
            "RegNumberChild": "RP-4X0201-4K7-5P",
            "NameChild": "RES ARRAY 4.7K OHM 4 RES 0502",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.084144
          },
          {
            "SKChild": 100,
            "RegNumberChild": "T-BC847CDLP",
            "NameChild": "TRANS DUAL NPN 45V 100mA SMD DFN1310-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.065747
          },
          {
            "SKChild": 100,
            "RegNumberChild": "BJT-NPN-300V-SOT323",
            "NameChild": "TRANSISTOR NPN 300V 200MA SOT323",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.026584
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTC3315AIV",
            "NameChild": "IC Synchronous Dual Step-Down DC-DC Converter, ADJ 2A LQFN-12",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 6.241272
          },
          {
            "SKChild": 100,
            "RegNumberChild": "XC7A50T-2CPG236C",
            "NameChild": "IC FPGA Artix 7, 52160 cells, 106 I/O, CSBGA236",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 35.373238
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS3895ADRYR",
            "NameChild": "IC ADJ SUPERVISOR SON-6",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.368346
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPD4E004DRYR",
            "NameChild": "IC ESD-PROT ARRAY 4CH 6-SON",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.127014
          },
          {
            "SKChild": 100,
            "RegNumberChild": "EMIF04-1K030F3",
            "NameChild": "RC PI EMI Filter 1K/24pF WFBGA-9",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.382235
          },
          {
            "SKChild": 100,
            "RegNumberChild": "FODM8801B",
            "NameChild": "Transistor Output Optocouplers OptoHiT Phototrans 75V 1-Ch CTR 260%",
            "MNF": 2,
            "MJ": "pcs",
            "TotalPrice": 0.77637
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TPS79925YZU",
            "NameChild": "IC LDO REG 200MA 2.5V 5-DSBGA",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.210558
          },
          {
            "SKChild": 100,
            "RegNumberChild": "S25FL128SAGBHI200",
            "NameChild": "IC FLASH 128MBIT 133MHz BGA24",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 2.552054
          },
          {
            "SKChild": 100,
            "RegNumberChild": "LTM8065",
            "NameChild": "IC REG DC-DC 2.5A 40V ADJ",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 11.629422
          },
          {
            "SKChild": 100,
            "RegNumberChild": "PCB-MX-X2G2-MAIN",
            "NameChild": "Bare PCB",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 3.143757
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 300,
        "RegNumberParent": "MX-X2G2-REAR-FL-SUBASSM",
        "NameParent": "MX X2G2 Rear Subassembly, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MX-X2G2-MAIN-FL-PCA",
            "NameChild": "MX Main board X2G2 PCIe, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MECH-MX-X2G2-REAR-LP",
            "NameChild": "MECH Part MX X2G2 Rear with Light Pipes",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "TP-10X10X1-TGA6200",
            "NameChild": "Thermal pad 10x10x1.0mm, TG-A6200, 6.2W/m-K",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0.103214
          }
        ]
      },
      {
        "AltKV": 0,
        "SKParent": 401,
        "RegNumberParent": "MX023MG-SY-X2G2-FL",
        "NameParent": "MX IMX174LLJ-C B/W PCIe X2G2 Camera, Horizontal",
        "Position": 1,
        "Parts": [
          {
            "SKChild": 300,
            "RegNumberChild": "MX-X2G2-REAR-FL-SUBASSM",
            "NameChild": "MX X2G2 Rear Subassembly, Horizontal",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 300,
            "RegNumberChild": "MT023MG-FRONT-SUBASSM",
            "NameChild": "MT IMX174LLJ-C B/W Front Subassembly",
            "MNF": 1,
            "MJ": "pcs",
            "TotalPrice": 0
          },
          {
            "SKChild": 100,
            "RegNumberChild": "SROB-M2X10-CUST",
            "NameChild": "M2x10, custom low profile screw, black",
            "MNF": 4,
            "MJ": "pcs",
            "TotalPrice": 0.031656
          }
        ]
      }
    ]
  }
  //***********************/
];

// Function to get CameraItem based on Camera.Name
const getCameraItemsByName = (cameraName: string): CameraItem[] | undefined => {
  const camera = camerasData.find((cam) => cam.Name === cameraName);
  return camera ? camera.Structure : undefined;
}

// Function to get a CameraList
const getCameraList = (): CamerasList[] | undefined => {
  return camerasData.map((camera) => ({ Name: camera.Name }));
}

// Function to get ItemPart by Item.Name
const getCameraPartsByItemName = (cameraName: string, itemName: string): ItemPart[] | undefined => {
  const cameraStructure = getCameraItemsByName(cameraName);
  if (cameraStructure) {
    for (const item of cameraStructure) {
      if (item.RegNumberParent === itemName) {
        return item.Parts; // Return the Parts array if found
      }
    }
  } else return undefined; // Return undefined if no match is found
};

export { camerasData, getCameraItemsByName, getCameraList, getCameraPartsByItemName };