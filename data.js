const ARTICULOS_INICIALES = [
  // AIR PACK OVHT SENSOR
  { "articulo": "O-RING 1", "pn": "MS9385-07", "seccion": "AIR PACK OVHT SENSOR", "nota": "" },
  { "articulo": "O-RING 2", "pn": "S9028A905", "seccion": "AIR PACK OVHT SENSOR", "nota": "" },
  { "articulo": "MOLYKOTE4", "pn": "M0LYKOTE44", "seccion": "AIR PACK OVHT SENSOR", "nota": "" },
  { "articulo": "KRYTOX P", "pn": "GPL206", "seccion": "AIR PACK OVHT SENSOR", "nota": "" },
  { "articulo": "NEVER SEEZ COMPOUND", "pn": "NSBT8N", "seccion": "AIR PACK OVHT SENSOR", "nota": "" },

  // ATC ANTENNAS
  { "articulo": "PACKING", "pn": "AS3582-028", "seccion": "ATC ANTENNAS", "nota": "" },
  { "articulo": "SEALANT", "pn": "BMS5-95 / PS870B1-2", "seccion": "ATC ANTENNAS", "nota": "" },
  { "articulo": "COMPOUND", "pn": "DC4", "seccion": "ATC ANTENNAS", "nota": "" },

  // CABIN LIGHTS
  { "articulo": "EMERGENCY LIGHT SIGNS SMALL LAMPS", "pn": "3071BPEGPL", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "EMERGENCY LIGHTS EXTERIOR LAMPS", "pn": "767", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "BELT AND NO SMOKE LIGHT", "pn": "387", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "READING LIGHT", "pn": "9204", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "FUEL STATION LIGHT", "pn": "GE1495", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "WORK LIGHT COVER", "pn": "239052-13", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "FIRE TEST LIGHT COVER GREEN", "pn": "682-1001-001", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "LENS COVER FOR GALLEY LIGHT", "pn": "239004-19", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "LAMP BULB FOR EEC ALT SWITCH", "pn": "MS24515-685AS15", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "ASSY LOWER EMERG SIGN", "pn": "70-0366-11", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "GALLEY BULB", "pn": "OLN115-18K", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "BASE WHITE EMERG SIGNS", "pn": "207330", "seccion": "CABIN LIGHTS", "nota": "" },
  { "articulo": "EMERG SIGNS LENS (EXIT)", "pn": "207377-1001", "seccion": "CABIN LIGHTS", "nota": "" },

  // CDU
  { "articulo": "FMC CDU SHIM", "pn": "137300-78", "seccion": "CDU", "nota": "" },
  { "articulo": "FMC CDU SCREW", "pn": "117357-21", "seccion": "CDU", "nota": "" },

  // EMERG BATTERIES & FLASHLIGHT
  { "articulo": "EMERG BATTERIES", "pn": "ADD71701-100", "seccion": "EMERG BATTERIES", "nota": "" },
  { "articulo": "FUSE", "pn": "B215-06", "seccion": "EMERG BATTERIES", "nota": "" },
  { "articulo": "FLASHLIGHT BATTERIES", "pn": "P4-01-0021", "seccion": "FLASHLIGHT", "nota": "" },
  { "articulo": "FLASHLIGHT SHIELD", "pn": "A1-18-1030", "seccion": "FLASHLIGHT", "nota": "" },
  { "articulo": "MEGAPHONE SET SCREW KIT", "pn": "9416", "seccion": "MEGAPHONE", "nota": "" },

  // FLOORPATH
  { "articulo": "COVER (BLUE)", "pn": "5180453792", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "ENDCAP 1CM", "pn": "417N5212-1CM", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "BULB (EMERGENCY LIGHT)", "pn": "3071BPEGPL", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "EMERG FLOORPATH LIGHT ASSY", "pn": "81000-22608ATS", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "FLOORPATH RECEPTACLE - PIN", "pn": "60983-3", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "FLOORPATH LIGHT", "pn": "60888-4", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "CRIMP TOOL PIN", "pn": "10131-4", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "COVER TRACK (BLACK)", "pn": "ACIFL00121-02", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "RED LENS", "pn": "S417N509-6", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "WHITE LENS", "pn": "S417N509-2", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "SOCKETS EMERG LIGHTS", "pn": "60988-3", "seccion": "FLOORPATH", "nota": "" },
  { "articulo": "SAFTGLO TAPE", "pn": "POLYKEN108FR0-5", "seccion": "FLOORPATH", "nota": "" },

  // LOGO LIGHTS
  { "articulo": "LOGO LIGHT BULB", "pn": "HLX64621", "seccion": "LOGO LIGHTS", "nota": "" },
  { "articulo": "SCREWS LARGE", "pn": "BACB30ZE4-8", "seccion": "LOGO LIGHTS", "nota": "" },
  { "articulo": "SCREWS SMALL", "pn": "BACB30XD3K8", "seccion": "LOGO LIGHTS", "nota": "" },
  { "articulo": "SPRING A", "pn": "81116-37601", "seccion": "LOGO LIGHTS", "nota": "" },
  { "articulo": "SPRING B", "pn": "81115-37601", "seccion": "LOGO LIGHTS", "nota": "" },
  { "articulo": "SOCKET", "pn": "81004-37602", "seccion": "LOGO LIGHTS", "nota": "" },

  // LRRA
  { "articulo": "RED SEALANT", "pn": "PR1428B1-2", "seccion": "LRRA", "nota": "" },
  { "articulo": "BLACK SEALANT", "pn": "BMS5-95 / PS870B1-2", "seccion": "LRRA", "nota": "" },
  { "articulo": "GASKET", "pn": "AG723000-40", "seccion": "LRRA", "nota": "" },
  { "articulo": "GREEN SEALANT", "pn": "HT3326-5-50", "seccion": "LRRA", "nota": "" },
  { "articulo": "ANTENNA", "pn": "S67-2002-28", "seccion": "LRRA", "nota": "" },

  // MAIN & AUX BATTERIES
  { "articulo": "SCREWS", "pn": "BACB30NM3K4", "seccion": "MAIN & AUX BATTERIES", "nota": "" },
  { "articulo": "BATTERY", "pn": "024147-000", "seccion": "MAIN & AUX BATTERIES", "nota": "" },
  { "articulo": "CONNECTOR", "pn": "BACC45FT12-12P", "seccion": "MAIN & AUX BATTERIES", "nota": "" },

  // PANELS SCREWS
  { "articulo": "FUEL PANEL E&E", "pn": "NAS514P1032-16", "seccion": "PANELS SCREWS", "nota": "" },
  { "articulo": "E&E DOOR SWITCH PANEL", "pn": "NAS514P832-12", "seccion": "PANELS SCREWS", "nota": "" },
  { "articulo": "NUTPLATE FUEL PANEL E&E", "pn": "BACN10ZR3CD", "seccion": "PANELS SCREWS", "nota": "" },

  // RAMPS & SWITCH CAPS
  { "articulo": "Cockpit cap (rosca)", "pn": "15PA90-6W", "seccion": "RAMPS", "nota": "Ver Switch tips" },
  { "articulo": "COCKPit cap (fino)", "pn": "69-44578-2", "seccion": "RAMPS", "nota": "Ver Switch tips" },
  { "articulo": "Cabin Temp sensor filter (small)", "pn": "412A1605-41", "seccion": "RAMPS", "nota": "" },
  { "articulo": "Flt comp temp sensor filter (big)", "pn": "213A6404-1", "seccion": "RAMPS", "nota": "" },
  { "articulo": "INOP STICKER", "pn": "INT1072", "seccion": "RAMPS", "nota": "" },
  { "articulo": "GRILLE (FILTRO CABINA)", "pn": "412N1122-3A", "seccion": "RAMPS", "nota": "" },
  { "articulo": "BULB GALLEY", "pn": "MSC115", "seccion": "RAMPS", "nota": "" },
  { "articulo": "BEZEL", "pn": "11-6557-7GATS", "seccion": "RAMPS", "nota": "" },
  { "articulo": "COVER CALL LIGHT FOR CABIN CREW", "pn": "25-1734-15", "seccion": "RAMPS", "nota": "" },

  // SKEW SENSOR & TAPES
  { "articulo": "LACING TAPE", "pn": "BMS13-54TY3CL1FC", "seccion": "SKEW SENSOR", "nota": "" },
  { "articulo": "TAPE", "pn": "SCOTH70", "seccion": "SKEW SENSOR", "nota": "" },
  { "articulo": "AV25", "pn": "AV25", "seccion": "SKEW SENSOR", "nota": "" },
  { "articulo": "D50", "pn": "D5026NS", "seccion": "SKEW SENSOR", "nota": "" },

  // ENGINES
  { "articulo": "NUT SCREWS HARNESS EGT", "pn": "AS3486-10", "seccion": "ENGINES", "nota": "" },
  { "articulo": "MOX TAPE", "pn": "M0XNESS620B1", "seccion": "ENGINES", "nota": "" },
  { "articulo": "TAPE HIGH TEMP ALUMINIUM FOIL", "pn": "3M363", "seccion": "ENGINES", "nota": "" },
  { "articulo": "TAPE GLASS CLOTH HIGH TEMP", "pn": "3M361", "seccion": "ENGINES", "nota": "" },
  { "articulo": "LOCKWIRE FOR HARNESS REPAIR", "pn": "MS20995C15", "seccion": "ENGINES", "nota": "" },
  { "articulo": "CLAMP BANDS CONNECTOR", "pn": "600-052", "seccion": "ENGINES", "nota": "TOOL: DBS-1101" },

  // INSERTS/EXTRACTORS
  { "articulo": "YELLOW / WHITE", "pn": "M81969-14-04", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "BLUE / WHITE", "pn": "M81969-14-03", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "RED / WHITE", "pn": "M81969-14-02", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "RED / WHITE (VARIANT)", "pn": "M81969-14-11", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "GREEN / WHITE", "pn": "M81969-14-01", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "VERDE / ROJO", "pn": "CTA1160", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "GREEN / WHITE METAL", "pn": "M81969-1-01", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "RED / WHITE METAL", "pn": "M81969-1-02", "seccion": "INSERTS/EXTRACTORS", "nota": "" },
  { "articulo": "BLUE / WHITE METAL", "pn": "M81969-1-03", "seccion": "INSERTS/EXTRACTORS", "nota": "" },

  // OTHERS
  { "articulo": "ELEVATOR PLUG FOR LEAK TEST", "pn": "MS21913V6P", "seccion": "OTHERS", "nota": "" },
  { "articulo": "LOCKWIRE FLIGHT DECK SWITCHES", "pn": "MS20995CY15", "seccion": "OTHERS", "nota": "" },
  { "articulo": "RODFILLER CLAMPS", "pn": "69B47961-2", "seccion": "OTHERS", "nota": "" },
  { "articulo": "ANTISTATIC BAGS", "pn": "ESDBAG62X48", "seccion": "OTHERS", "nota": "" },
  { "articulo": "STATIC DISCHARGER LARGE", "pn": "740001", "seccion": "OTHERS", "nota": "" },
  { "articulo": "STATIC DISCHARGER SHORT", "pn": "740007", "seccion": "OTHERS", "nota": "" },

  // SPLICES & CRIMPS
  { "articulo": "SPLICE MOISTURE RED", "pn": "D436-36", "seccion": "SPLICES", "nota": "" },
  { "articulo": "SPLICE MOISTURE BLUE", "pn": "D436-37", "seccion": "SPLICES", "nota": "" },
  { "articulo": "SPLICE MOISTURE YELLOW", "pn": "D436-38", "seccion": "SPLICES", "nota": "" },
  { "articulo": "END CAP CRIMP TYPE (RED)", "pn": "324485", "seccion": "SPLICES", "nota": "CRIMP TOOL: 58573-1" },
  { "articulo": "Terminal lug landing light", "pn": "323750", "seccion": "SPLICES", "nota": "CRIMP TOOL: 59461" },
  { "articulo": "TERMINAL SPADE TYPE (AIRSTAIRS)", "pn": "3-350816-2", "seccion": "SPLICES", "nota": "CRIMP TOOL: 9-1478240-0 // DIE: 58628-2" },

  // TAPES & HEATSHRINKS
  { "articulo": "TEFLON TAPE", "pn": "P421", "seccion": "TAPES TO REPAIR HARNESS", "nota": "" },
  { "articulo": "HEATSHRINK 1/4 YELLOW", "pn": "RNF100-1-4-4", "seccion": "HEATSHRINKS", "nota": "" },
  { "articulo": "SMALL SCREW RACK CONNECTOR", "pn": "BACS12HN06-6", "seccion": "RACKS & SCREWS", "nota": "" },

  // CABLE TIES (BRIDAS)
  { "articulo": "CABLE TIE (BACS38K6)", "pn": "BACS38K6", "seccion": "STRAP - CABLE TIE", "nota": "1st Longest" },
  { "articulo": "CABLE TIE (BACS38K3)", "pn": "BACS38K3", "seccion": "STRAP - CABLE TIE", "nota": "2nd Longest" },
  { "articulo": "CABLE TIE (BACS38K2)", "pn": "BACS38K2", "seccion": "STRAP - CABLE TIE", "nota": "Medium" },
  { "articulo": "CABLE TIE (BACS38K7)", "pn": "BACS38K7", "seccion": "STRAP - CABLE TIE", "nota": "Medium" },
  { "articulo": "CABLE TIE (BACS38K10)", "pn": "BACS38K10", "seccion": "STRAP - CABLE TIE", "nota": "Small" },
  { "articulo": "CABLE TIE (BACS38K1)", "pn": "BACS38K1", "seccion": "STRAP - CABLE TIE", "nota": "Small" },
  { "articulo": "CABLE TIE (BACS38K4)", "pn": "BACS38K4", "seccion": "STRAP - CABLE TIE", "nota": "Small (Typical)" },
  { "articulo": "CABLE TIE (BACS38K9)", "pn": "BACS38K9", "seccion": "STRAP - CABLE TIE", "nota": "Smallest" },
  { "articulo": "CABLE TIE (BACS38K5)", "pn": "BACS38K5", "seccion": "STRAP - CABLE TIE", "nota": "Smallest" },

  // COCKPIT & CABIN
  { "articulo": "MCP SCREW (BLACK)", "pn": "BACS12CK3H7", "seccion": "COCKPIT", "nota": "" },
  { "articulo": "MCP WASHER (BLACK)", "pn": "NAS1149C0332B", "seccion": "COCKPIT", "nota": "" },
  { "articulo": "CAP PSU CONNECTORS", "pn": "M85049/138-47A", "seccion": "CABIN PARTS", "nota": "" },
  { "articulo": "AIRSTAIRS LAMPS", "pn": "1864", "seccion": "AIRSTAIRS", "nota": "" },
  { "articulo": "AIRSTAIR LIGHT LENS", "pn": "870661-1", "seccion": "AIRSTAIRS", "nota": "" },

  // TAGS & COLLARS
  { "articulo": "Inop tag label (small size)", "pn": "CBTAG", "seccion": "TAGS AND COLLARS", "nota": "" },
  { "articulo": "Collars inop system", "pn": "S4933959-523", "seccion": "TAGS AND COLLARS", "nota": "" },
  { "articulo": "White collar", "pn": "10164-3", "seccion": "TAGS AND COLLARS", "nota": "" },
  { "articulo": "Red collar (inop system)", "pn": "10237-1", "seccion": "TAGS AND COLLARS", "nota": "" },

  // WINDOWS PARTS
  { "articulo": "Wire mount sliding windows", "pn": "MB-3", "seccion": "WINDOWS PARTS", "nota": "" },
  { "articulo": "SCREW TERMINAL LUG WINDOW", "pn": "BACS12HN06-4", "seccion": "WINDOWS PARTS", "nota": "" },
  { "articulo": "WASHER TERMINAL LUG WINDOW", "pn": "MS35338-98", "seccion": "WINDOWS PARTS", "nota": "" }
];

const LISTA_HERRAMIENTAS = [
  { "articulo": "QUICKSET", "pn": "QUICKSET" },
  { "articulo": "FLUKE117", "pn": "FLUKE117" },
  { "articulo": "STAB TRIM CUTOUT TESTER", "pn": "C27007-46" },
  { "articulo": "ELT ADT406AP 50 OHM DUMMY LOAD KIT", "pn": "112-3148" },
  { "articulo": "PROBE OVHT AND TESTER", "pn": "BH17336A // BH16440-40" },
  { "articulo": "TEMPCAL TESTER", "pn": "H394-230" },
  { "articulo": "BONDING METER", "pn": "M1" },
  { "articulo": "HAND HELD MULTIPURPOSE I/FACE HHMPI", "pn": "FDS400-301" },
  { "articulo": "FIREX TEST CARGO", "pn": "C26006-1" },
  { "articulo": "TEST SET / PITOT STATIC", "pn": "MPS45" },
  { "articulo": "GROUND FAULT PROTECTION SYS TEST SET", "pn": "F72917-19" },
  { "articulo": "PDL LAPTOP WITH TECHSAT PDL MKII", "pn": "TECHSATPDLLAPT0P" },
  { "articulo": "FLUKE324 (CLAMP)", "pn": "FLUKE324" },
  { "articulo": "CAJA RADIOALTIMETRO", "pn": "C34005-16" },
  { "articulo": "RADIO ALTIMETER TEST SET", "pn": "DRA707" },
  { "articulo": "TRAMMEL BAR", "pn": "F80055-1" },
  { "articulo": "RUDDER PCU TEST SET", "pn": "C29002-17" },
  { "articulo": "HIRFS", "pn": "906-10247-3 OR XLR-9703-01" },
  { "articulo": "WTB FEEDTHROUGH CONNECTORS ADAPTER (HIRFS)", "pn": "WTBADAPTER" },
  { "articulo": "TOOL CONNECTORS FOR BACKSHELLS", "pn": "CMS837" },
  { "articulo": "KNIPEX CUTTING SAFTGLO", "pn": "9435215" },
  { "articulo": "FIRE EXTINGUISHER BOTTLE SQUIB TESTER", "pn": "F80229-69" },
  { "articulo": "WIRE JUMPER KIT MID-CABIN B737MAX", "pn": "RYR-EXITS-DDG-JUMPER-KIT" },
  { "articulo": "CLAMP BANDS CONNECTOR TOOL", "pn": "DBS-1101" },
  { "articulo": "CRIMP TOOL END CAP RED", "pn": "58573-1" },
  { "articulo": "CRIMP TOOL LANDING LIGHT LUG", "pn": "59461" },
  { "articulo": "CRIMP TOOL & DIE AIRSTAIRS SPADE", "pn": "9-1478240-0 // DIE: 58628-2" }
];
