import { Group, Text } from "@mantine/core";
import BrandLogo from "components/BrandLogo";

const brandsData = {
	ABT: {
		name: "ABT",
		slug: "abt",
	},
	Abarth: {
		name: "Abarth",
		slug: "abarth",
	},
	"Abbott-Detroit": {
		name: "Abbott-Detroit",
		slug: "abbott-detroit",
	},
	AC: {
		name: "AC",
		slug: "ac",
	},
	Abadal: {
		name: "Abadal",
		slug: "abadal",
	},
	Aiways: {
		name: "Aiways",
		slug: "aiways",
	},
	Aixam: {
		name: "Aixam",
		slug: "aixam",
	},
	Acura: {
		name: "Acura",
		slug: "acura",
	},
	"Alfa Romeo": {
		name: "Alfa Romeo",
		slug: "alfa-romeo",
	},
	Alpina: {
		name: "Alpina",
		slug: "alpina",
	},
	Alpine: {
		name: "Alpine",
		slug: "alpine",
	},
	AMC: {
		name: "AMC",
		slug: "amc",
	},
	Apollo: {
		name: "Apollo",
		slug: "apollo",
	},
	Alvis: {
		name: "Alvis",
		slug: "alvis",
	},
	Arcfox: {
		name: "Arcfox",
		slug: "arcfox",
	},
	Alta: {
		name: "Alta",
		slug: "alta",
	},
	ARO: {
		name: "ARO",
		slug: "aro",
	},
	Ariel: {
		name: "Ariel",
		slug: "ariel",
	},
	Artega: {
		name: "Artega",
		slug: "artega",
	},
	Ascari: {
		name: "Ascari",
		slug: "ascari",
	},
	Arrival: {
		name: "Arrival",
		slug: "arrival",
	},
	Aspark: {
		name: "Aspark",
		slug: "aspark",
	},
	Arrinera: {
		name: "Arrinera",
		slug: "arrinera",
	},
	"Aston Martin": {
		name: "Aston Martin",
		slug: "aston-martin",
	},
	Arash: {
		name: "Arash",
		slug: "arash",
	},
	Auburn: {
		name: "Auburn",
		slug: "auburn",
	},
	Atalanta: {
		name: "Atalanta",
		slug: "atalanta",
	},
	Audi: {
		name: "Audi",
		slug: "audi",
	},
	Austin: {
		name: "Austin",
		slug: "austin",
	},
	"Audi Sport": {
		name: "Audi Sport",
		slug: "audi-sport",
	},
	Autobianchi: {
		name: "Autobianchi",
		slug: "autobianchi",
	},
	Askam: {
		name: "Askam",
		slug: "askam",
	},
	Axon: {
		name: "Axon",
		slug: "axon",
	},
	Baojun: {
		name: "Baojun",
		slug: "baojun",
	},
	"BAIC Motor": {
		name: "BAIC Motor",
		slug: "baic-motor",
	},
	BAC: {
		name: "BAC",
		slug: "bac",
	},
	Autobacs: {
		name: "Autobacs",
		slug: "autobacs",
	},
	Bentley: {
		name: "Bentley",
		slug: "bentley",
	},
	Berkeley: {
		name: "Berkeley",
		slug: "berkeley",
	},
	Berliet: {
		name: "Berliet",
		slug: "berliet",
	},
	BeiBen: {
		name: "BeiBen",
		slug: "beiben",
	},
	Bestune: {
		name: "Bestune",
		slug: "bestune",
	},
	BharatBenz: {
		name: "BharatBenz",
		slug: "bharatbenz",
	},
	Bertone: {
		name: "Bertone",
		slug: "bertone",
	},
	Bitter: {
		name: "Bitter",
		slug: "bitter",
	},
	"BMW M": {
		name: "BMW M",
		slug: "bmw-m",
	},
	Borgward: {
		name: "Borgward",
		slug: "borgward",
	},
	Brabus: {
		name: "Brabus",
		slug: "brabus",
	},
	Bizzarrini: {
		name: "Bizzarrini",
		slug: "bizzarrini",
	},
	BMW: {
		name: "BMW",
		slug: "bmw",
	},
	Brilliance: {
		name: "Brilliance",
		slug: "brilliance",
	},
	Brooke: {
		name: "Brooke",
		slug: "brooke",
	},
	Brammo: {
		name: "Brammo",
		slug: "brammo",
	},
	Buick: {
		name: "Buick",
		slug: "buick",
	},
	Bugatti: {
		name: "Bugatti",
		slug: "bugatti",
	},
	BYD: {
		name: "BYD",
		slug: "byd",
	},
	Bristol: {
		name: "Bristol",
		slug: "bristol",
	},
	Bufori: {
		name: "Bufori",
		slug: "bufori",
	},
	Cadillac: {
		name: "Cadillac",
		slug: "cadillac",
	},
	Byton: {
		name: "Byton",
		slug: "byton",
	},
	Bowler: {
		name: "Bowler",
		slug: "bowler",
	},
	CAMC: {
		name: "CAMC",
		slug: "camc",
	},
	Canoo: {
		name: "Canoo",
		slug: "canoo",
	},
	Carlsson: {
		name: "Carlsson",
		slug: "carlsson",
	},
	Changfeng: {
		name: "Changfeng",
		slug: "changfeng",
	},
	"Chevrolet Corvette": {
		name: "Chevrolet Corvette",
		slug: "chevrolet-corvette",
	},
	Caterham: {
		name: "Caterham",
		slug: "caterham",
	},
	Changan: {
		name: "Changan",
		slug: "changan",
	},
	Caparo: {
		name: "Caparo",
		slug: "caparo",
	},
	Chevrolet: {
		name: "Chevrolet",
		slug: "chevrolet",
	},
	Chrysler: {
		name: "Chrysler",
		slug: "chrysler",
	},
	Cizeta: {
		name: "Cizeta",
		slug: "cizeta",
	},
	Cole: {
		name: "Cole",
		slug: "cole",
	},
	"Corre La Licorne": {
		name: "Corre La Licorne",
		slug: "corre-la-licorne",
	},
	Citroën: {
		name: "Citroën",
		slug: "citroen",
	},
	Daewoo: {
		name: "Daewoo",
		slug: "daewoo",
	},
	Chery: {
		name: "Chery",
		slug: "chery",
	},
	DAF: {
		name: "DAF",
		slug: "daf",
	},
	Dacia: {
		name: "Dacia",
		slug: "dacia",
	},
	Cisitalia: {
		name: "Cisitalia",
		slug: "cisitalia",
	},
	Daimler: {
		name: "Daimler",
		slug: "daimler",
	},
	Dartz: {
		name: "Dartz",
		slug: "dartz",
	},
	Datsun: {
		name: "Datsun",
		slug: "datsun",
	},
	Dayun: {
		name: "Dayun",
		slug: "dayun",
	},
	Delage: {
		name: "Delage",
		slug: "delage",
	},
	Daihatsu: {
		name: "Daihatsu",
		slug: "daihatsu",
	},
	"De Tomaso": {
		name: "De Tomaso",
		slug: "de-tomaso",
	},
	DeSoto: {
		name: "DeSoto",
		slug: "desoto",
	},
	"Detroit Electric": {
		name: "Detroit Electric",
		slug: "detroit-electric",
	},
	"David Brown": {
		name: "David Brown",
		slug: "david-brown",
	},
	"Devel Sixteen": {
		name: "Devel Sixteen",
		slug: "devel-sixteen",
	},
	Diatto: {
		name: "Diatto",
		slug: "diatto",
	},
	DKW: {
		name: "DKW",
		slug: "dkw",
	},
	DINA: {
		name: "DINA",
		slug: "dina",
	},
	DMC: {
		name: "DMC",
		slug: "dmc",
	},
	Dodge: {
		name: "Dodge",
		slug: "dodge",
	},
	"Dodge Viper": {
		name: "Dodge Viper",
		slug: "dodge-viper",
	},
	Drako: {
		name: "Drako",
		slug: "drako",
	},
	Duesenberg: {
		name: "Duesenberg",
		slug: "duesenberg",
	},
	Eagle: {
		name: "Eagle",
		slug: "eagle",
	},
	Dongfeng: {
		name: "Dongfeng",
		slug: "dongfeng",
	},
	EDAG: {
		name: "EDAG",
		slug: "edag",
	},
	Donkervoort: {
		name: "Donkervoort",
		slug: "donkervoort",
	},
	DS: {
		name: "DS",
		slug: "ds",
	},
	Edsel: {
		name: "Edsel",
		slug: "edsel",
	},
	Elemental: {
		name: "Elemental",
		slug: "elemental",
	},
	Elfin: {
		name: "Elfin",
		slug: "elfin",
	},
	ERF: {
		name: "ERF",
		slug: "erf",
	},
	Eicher: {
		name: "Eicher",
		slug: "eicher",
	},
	Elva: {
		name: "Elva",
		slug: "elva",
	},
	Exeed: {
		name: "Exeed",
		slug: "exeed",
	},
	Englon: {
		name: "Englon",
		slug: "englon",
	},
	"Facel Vega": {
		name: "Facel Vega",
		slug: "facel-vega",
	},
	"Faraday Future": {
		name: "Faraday Future",
		slug: "faraday-future",
	},
	FAW: {
		name: "FAW",
		slug: "faw",
	},
	Eterniti: {
		name: "Eterniti",
		slug: "eterniti",
	},
	Ferrari: {
		name: "Ferrari",
		slug: "ferrari",
	},
	Fiat: {
		name: "Fiat",
		slug: "fiat",
	},
	"9ff": {
		name: "9ff",
		slug: "9ff",
	},
	Foden: {
		name: "Foden",
		slug: "foden",
	},
	"Force Motors": {
		name: "Force Motors",
		slug: "force-motors",
	},
	"FAW Jiefang": {
		name: "FAW Jiefang",
		slug: "faw-jiefang",
	},
	Fioravanti: {
		name: "Fioravanti",
		slug: "fioravanti",
	},
	"Ford Mustang": {
		name: "Ford Mustang",
		slug: "ford-mustang",
	},
	Ford: {
		name: "Ford",
		slug: "ford",
	},
	FPV: {
		name: "FPV",
		slug: "fpv",
	},
	FSO: {
		name: "FSO",
		slug: "fso",
	},
	Foton: {
		name: "Foton",
		slug: "foton",
	},
	Fisker: {
		name: "Fisker",
		slug: "fisker",
	},
	Franklin: {
		name: "Franklin",
		slug: "franklin",
	},
	"GAC Group": {
		name: "GAC Group",
		slug: "gac-group",
	},
	"Gardner Douglas": {
		name: "Gardner Douglas",
		slug: "gardner-douglas",
	},
	Freightliner: {
		name: "Freightliner",
		slug: "freightliner",
	},
	Geely: {
		name: "Geely",
		slug: "geely",
	},
	Geo: {
		name: "Geo",
		slug: "geo",
	},
	GAZ: {
		name: "GAZ",
		slug: "gaz",
	},
	Genesis: {
		name: "Genesis",
		slug: "genesis",
	},
	Gilbern: {
		name: "Gilbern",
		slug: "gilbern",
	},
	Gillet: {
		name: "Gillet",
		slug: "gillet",
	},
	"General Motors": {
		name: "General Motors",
		slug: "general-motors",
	},
	Geometry: {
		name: "Geometry",
		slug: "geometry",
	},
	Ginetta: {
		name: "Ginetta",
		slug: "ginetta",
	},
	GMC: {
		name: "GMC",
		slug: "gmc",
	},
	"Golden Dragon": {
		name: "Golden Dragon",
		slug: "golden-dragon",
	},
	"Great Wall": {
		name: "Great Wall",
		slug: "great-wall",
	},
	Grinnall: {
		name: "Grinnall",
		slug: "grinnall",
	},
	Gumpert: {
		name: "Gumpert",
		slug: "gumpert",
	},
	Haval: {
		name: "Haval",
		slug: "haval",
	},
	Hawtai: {
		name: "Hawtai",
		slug: "hawtai",
	},
	Gonow: {
		name: "Gonow",
		slug: "gonow",
	},
	Hennessey: {
		name: "Hennessey",
		slug: "hennessey",
	},
	Haima: {
		name: "Haima",
		slug: "haima",
	},
	Hillman: {
		name: "Hillman",
		slug: "hillman",
	},
	"Hindustan Motors": {
		name: "Hindustan Motors",
		slug: "hindustan-motors",
	},
	Hino: {
		name: "Hino",
		slug: "hino",
	},
	"Hispano-Suiza": {
		name: "Hispano-Suiza",
		slug: "hispano-suiza",
	},
	HiPhi: {
		name: "HiPhi",
		slug: "hiphi",
	},
	Hafei: {
		name: "Hafei",
		slug: "hafei",
	},
	Holden: {
		name: "Holden",
		slug: "holden",
	},
	Higer: {
		name: "Higer",
		slug: "higer",
	},
	Honda: {
		name: "Honda",
		slug: "honda",
	},
	Hongqi: {
		name: "Hongqi",
		slug: "hongqi",
	},
	Hongyan: {
		name: "Hongyan",
		slug: "hongyan",
	},
	HSV: {
		name: "HSV",
		slug: "hsv",
	},
	Hommell: {
		name: "Hommell",
		slug: "hommell",
	},
	Horch: {
		name: "Horch",
		slug: "horch",
	},
	Hupmobile: {
		name: "Hupmobile",
		slug: "hupmobile",
	},
	Hudson: {
		name: "Hudson",
		slug: "hudson",
	},
	Hummer: {
		name: "Hummer",
		slug: "hummer",
	},
	Infiniti: {
		name: "Infiniti",
		slug: "infiniti",
	},
	Innocenti: {
		name: "Innocenti",
		slug: "innocenti",
	},
	IH: {
		name: "IH",
		slug: "ih",
	},
	Intermeccanica: {
		name: "Intermeccanica",
		slug: "intermeccanica",
	},
	International: {
		name: "International",
		slug: "international",
	},
	IKCO: {
		name: "IKCO",
		slug: "ikco",
	},
	"IC Bus": {
		name: "IC Bus",
		slug: "ic-bus",
	},
	Hyundai: {
		name: "Hyundai",
		slug: "hyundai",
	},
	Isdera: {
		name: "Isdera",
		slug: "isdera",
	},
	Isuzu: {
		name: "Isuzu",
		slug: "isuzu",
	},
	Iso: {
		name: "Iso",
		slug: "iso",
	},
	Irizar: {
		name: "Irizar",
		slug: "irizar",
	},
	JAC: {
		name: "JAC",
		slug: "jac",
	},
	Iveco: {
		name: "Iveco",
		slug: "iveco",
	},
	Jaguar: {
		name: "Jaguar",
		slug: "jaguar",
	},
	Jeep: {
		name: "Jeep",
		slug: "jeep",
	},
	Jetta: {
		name: "Jetta",
		slug: "jetta",
	},
	Jensen: {
		name: "Jensen",
		slug: "jensen",
	},
	Skoda: {
		name: "Jawa",
		slug: "jawa",
	},
	JMC: {
		name: "JMC",
		slug: "jmc",
	},
	Kaiser: {
		name: "Kaiser",
		slug: "kaiser",
	},
	Karma: {
		name: "Karma",
		slug: "karma",
	},
	Keating: {
		name: "Keating",
		slug: "keating",
	},
	"Karlmann King": {
		name: "Karlmann King",
		slug: "karlmann-king",
	},
	Kamaz: {
		name: "Kamaz",
		slug: "kamaz",
	},
	Kenworth: {
		name: "Kenworth",
		slug: "kenworth",
	},
	"JBA Motors": {
		name: "JBA Motors",
		slug: "jba-motors",
	},
	Kia: {
		name: "Kia",
		slug: "kia",
	},
	"King Long": {
		name: "King Long",
		slug: "king-long",
	},
	Koenigsegg: {
		name: "Koenigsegg",
		slug: "koenigsegg",
	},
	Lada: {
		name: "Lada",
		slug: "lada",
	},
	KTM: {
		name: "KTM",
		slug: "ktm",
	},
	Lancia: {
		name: "Lancia",
		slug: "lancia",
	},
	Lagonda: {
		name: "Lagonda",
		slug: "lagonda",
	},
	"Land Rover": {
		name: "Land Rover",
		slug: "land-rover",
	},
	Lamborghini: {
		name: "Lamborghini",
		slug: "lamborghini",
	},
	Leyland: {
		name: "Leyland",
		slug: "leyland",
	},
	Laraki: {
		name: "Laraki",
		slug: "laraki",
	},
	Leapmotor: {
		name: "Leapmotor",
		slug: "leapmotor",
	},
	Lifan: {
		name: "Lifan",
		slug: "lifan",
	},
	"Li Auto": {
		name: "Li Auto",
		slug: "li-auto",
	},
	Landwind: {
		name: "Landwind",
		slug: "landwind",
	},
	Lexus: {
		name: "Lexus",
		slug: "lexus",
	},
	Lister: {
		name: "Lister",
		slug: "lister",
	},
	Ligier: {
		name: "Ligier",
		slug: "ligier",
	},
	Lobini: {
		name: "Lobini",
		slug: "lobini",
	},
	Lincoln: {
		name: "Lincoln",
		slug: "lincoln",
	},
	Lordstown: {
		name: "Lordstown",
		slug: "lordstown",
	},
	Lotus: {
		name: "Lotus",
		slug: "lotus",
	},
	LEVC: {
		name: "LEVC",
		slug: "levc",
	},
	Luxgen: {
		name: "Luxgen",
		slug: "luxgen",
	},
	Mack: {
		name: "Mack",
		slug: "mack",
	},
	Mahindra: {
		name: "Mahindra",
		slug: "mahindra",
	},
	Lucid: {
		name: "Lucid",
		slug: "lucid",
	},
	Mansory: {
		name: "Mansory",
		slug: "mansory",
	},
	"Lynk & Co": {
		name: "Lynk & Co",
		slug: "lynk-and-co",
	},
	Marcos: {
		name: "Marcos",
		slug: "marcos",
	},
	Marlin: {
		name: "Marlin",
		slug: "marlin",
	},
	Maserati: {
		name: "Maserati",
		slug: "maserati",
	},
	MAN: {
		name: "MAN",
		slug: "man",
	},
	Mastretta: {
		name: "Mastretta",
		slug: "mastretta",
	},
	Maxus: {
		name: "Maxus",
		slug: "maxus",
	},
	MAZ: {
		name: "MAZ",
		slug: "maz",
	},
	Maybach: {
		name: "Maybach",
		slug: "maybach",
	},
	Lloyd: {
		name: "Lloyd",
		slug: "lloyd",
	},
	Mazzanti: {
		name: "Mazzanti",
		slug: "mazzanti",
	},
	Melkus: {
		name: "Melkus",
		slug: "melkus",
	},
	"Mercedes-AMG": {
		name: "Mercedes-AMG",
		slug: "mercedes-amg",
	},
	Mercury: {
		name: "Mercury",
		slug: "mercury",
	},
	Mazda: {
		name: "Mazda",
		slug: "mazda",
	},
	McLaren: {
		name: "McLaren",
		slug: "mclaren",
	},
	Merkur: {
		name: "Merkur",
		slug: "merkur",
	},
	MG: {
		name: "MG",
		slug: "mg",
	},
	Mini: {
		name: "Mini",
		slug: "mini",
	},
	"Mercedes-Benz": {
		name: "Mercedes-Benz",
		slug: "mercedes-benz",
	},
	MEV: {
		name: "MEV",
		slug: "mev",
	},
	Mitsuoka: {
		name: "Mitsuoka",
		slug: "mitsuoka",
	},
	Microcar: {
		name: "Microcar",
		slug: "microcar",
	},
	Morgan: {
		name: "Morgan",
		slug: "morgan",
	},
	MK: {
		name: "MK",
		slug: "mk",
	},
	Mitsubishi: {
		name: "Mitsubishi",
		slug: "mitsubishi",
	},
	Morris: {
		name: "Morris",
		slug: "morris",
	},
	Mosler: {
		name: "Mosler",
		slug: "mosler",
	},
	NIO: {
		name: "NIO",
		slug: "nio",
	},
	Navistar: {
		name: "Navistar",
		slug: "navistar",
	},
	Nissan: {
		name: "Nissan",
		slug: "nissan",
	},
	NEVS: {
		name: "NEVS",
		slug: "nevs",
	},
	"Nissan GT-R": {
		name: "Nissan GT-R",
		slug: "nissan-gt-r",
	},
	"Nissan Nismo": {
		name: "Nissan Nismo",
		slug: "nissan-nismo",
	},
	Nikola: {
		name: "Nikola",
		slug: "nikola",
	},
	Oltcit: {
		name: "Oltcit",
		slug: "oltcit",
	},
	Noble: {
		name: "Noble",
		slug: "noble",
	},
	Oldsmobile: {
		name: "Oldsmobile",
		slug: "oldsmobile",
	},
	Packard: {
		name: "Packard",
		slug: "packard",
	},
	Pagani: {
		name: "Pagani",
		slug: "pagani",
	},
	Opel: {
		name: "Opel",
		slug: "opel",
	},
	OSCA: {
		name: "OSCA",
		slug: "osca",
	},
	Paccar: {
		name: "Paccar",
		slug: "paccar",
	},
	Pegaso: {
		name: "Pegaso",
		slug: "pegaso",
	},
	Perodua: {
		name: "Perodua",
		slug: "perodua",
	},
	Peterbilt: {
		name: "Peterbilt",
		slug: "peterbilt",
	},
	Panhard: {
		name: "Panhard",
		slug: "panhard",
	},
	Panoz: {
		name: "Panoz",
		slug: "panoz",
	},
	"Pierce-Arrow": {
		name: "Pierce-Arrow",
		slug: "pierce-arrow",
	},
	Peugeot: {
		name: "Peugeot",
		slug: "peugeot",
	},
	Pininfarina: {
		name: "Pininfarina",
		slug: "pininfarina",
	},
	Pontiac: {
		name: "Pontiac",
		slug: "pontiac",
	},
	Porsche: {
		name: "Porsche",
		slug: "porsche",
	},
	Praga: {
		name: "Praga",
		slug: "praga",
	},
	PGO: {
		name: "PGO",
		slug: "pgo",
	},
	Plymouth: {
		name: "Plymouth",
		slug: "plymouth",
	},
	Qoros: {
		name: "Qoros",
		slug: "qoros",
	},
	Proton: {
		name: "Proton",
		slug: "proton",
	},
	Premier: {
		name: "Premier",
		slug: "premier",
	},
	Radical: {
		name: "Radical",
		slug: "radical",
	},
	Polestar: {
		name: "Polestar",
		slug: "polestar",
	},
	Rambler: {
		name: "Rambler",
		slug: "rambler",
	},
	RAM: {
		name: "RAM",
		slug: "ram",
	},
	Prodrive: {
		name: "Prodrive",
		slug: "prodrive",
	},
	Ranz: {
		name: "Ranz",
		slug: "ranz",
	},
	Rezvani: {
		name: "Rezvani",
		slug: "rezvani",
	},
	"Renault Samsung": {
		name: "Renault Samsung",
		slug: "renault-samsung",
	},
	Riley: {
		name: "Riley",
		slug: "riley",
	},
	Rimac: {
		name: "Rimac",
		slug: "rimac",
	},
	Rinspeed: {
		name: "Rinspeed",
		slug: "rinspeed",
	},
	Rivian: {
		name: "Rivian",
		slug: "rivian",
	},
	Roewe: {
		name: "Roewe",
		slug: "roewe",
	},
	Renault: {
		name: "Renault",
		slug: "renault",
	},
	"Rolls-Royce": {
		name: "Rolls-Royce",
		slug: "rolls-royce",
	},
	Rover: {
		name: "Rover",
		slug: "rover",
	},
	RUF: {
		name: "RUF",
		slug: "ruf",
	},
	Rossion: {
		name: "Rossion",
		slug: "rossion",
	},
	Ronart: {
		name: "Ronart",
		slug: "ronart",
	},
	Saab: {
		name: "Saab",
		slug: "saab",
	},
	Saturn: {
		name: "Saturn",
		slug: "saturn",
	},
	Scania: {
		name: "Scania",
		slug: "scania",
	},
	Scion: {
		name: "Scion",
		slug: "scion",
	},
	Saipa: {
		name: "Saipa",
		slug: "saipa",
	},
	Setra: {
		name: "Setra",
		slug: "setra",
	},
	Saleen: {
		name: "Saleen",
		slug: "saleen",
	},
	Shacman: {
		name: "Shacman",
		slug: "shacman",
	},
	SEAT: {
		name: "SEAT",
		slug: "seat",
	},
	Sinotruk: {
		name: "Sinotruk",
		slug: "sinotruk",
	},
	Singer: {
		name: "Singer",
		slug: "singer",
	},
	"SAIC Motor": {
		name: "SAIC Motor",
		slug: "saic-motor",
	},
	Sisu: {
		name: "Sisu",
		slug: "sisu",
	},
	Škoda: {
		name: "Škoda",
		slug: "skoda",
	},
	Smart: {
		name: "Smart",
		slug: "smart",
	},
	Simca: {
		name: "Simca",
		slug: "simca",
	},
	Soueast: {
		name: "Soueast",
		slug: "soueast",
	},
	SsangYong: {
		name: "SsangYong",
		slug: "ssangyong",
	},
	Spyker: {
		name: "Spyker",
		slug: "spyker",
	},
	Singulato: {
		name: "Singulato",
		slug: "singulato",
	},
	Spirra: {
		name: "Spirra",
		slug: "spirra",
	},
	SSC: {
		name: "SSC",
		slug: "ssc",
	},
	Sterling: {
		name: "Sterling",
		slug: "sterling",
	},
	Subaru: {
		name: "Subaru",
		slug: "subaru",
	},
	"Spania GTA": {
		name: "Spania GTA",
		slug: "spania-gta",
	},
	Suzuki: {
		name: "Suzuki",
		slug: "suzuki",
	},
	Suffolk: {
		name: "Suffolk",
		slug: "suffolk",
	},
	Tata: {
		name: "Tata",
		slug: "tata",
	},
	Studebaker: {
		name: "Studebaker",
		slug: "studebaker",
	},
	Tatra: {
		name: "Tatra",
		slug: "tatra",
	},
	TechArt: {
		name: "TechArt",
		slug: "techart",
	},
	Tauro: {
		name: "Tauro",
		slug: "tauro",
	},
	Tesla: {
		name: "Tesla",
		slug: "tesla",
	},
	Talbot: {
		name: "Talbot",
		slug: "talbot",
	},
	Stutz: {
		name: "Stutz",
		slug: "stutz",
	},
	"Toyota Crown": {
		name: "Toyota Crown",
		slug: "toyota-crown",
	},
	Toyota: {
		name: "Toyota",
		slug: "toyota",
	},
	"Toyota Century": {
		name: "Toyota Century",
		slug: "toyota-century",
	},
	Trion: {
		name: "Trion",
		slug: "trion",
	},
	Triumph: {
		name: "Triumph",
		slug: "triumph",
	},
	"Toyota Alphard": {
		name: "Toyota Alphard",
		slug: "toyota-alphard",
	},
	Troller: {
		name: "Troller",
		slug: "troller",
	},
	UD: {
		name: "UD",
		slug: "ud",
	},
	Tucker: {
		name: "Tucker",
		slug: "tucker",
	},
	Vandenbrink: {
		name: "Vandenbrink",
		slug: "vandenbrink",
	},
	UAZ: {
		name: "UAZ",
		slug: "uaz",
	},
	TVR: {
		name: "TVR",
		slug: "tvr",
	},
	Ultima: {
		name: "Ultima",
		slug: "ultima",
	},
	Tramontana: {
		name: "Tramontana",
		slug: "tramontana",
	},
	Vector: {
		name: "Vector",
		slug: "vector",
	},
	Venturi: {
		name: "Venturi",
		slug: "venturi",
	},
	Vauxhall: {
		name: "Vauxhall",
		slug: "vauxhall",
	},
	Venucia: {
		name: "Venucia",
		slug: "venucia",
	},
	Vencer: {
		name: "Vencer",
		slug: "vencer",
	},
	VLF: {
		name: "VLF",
		slug: "vlf",
	},
	VinFast: {
		name: "VinFast",
		slug: "vinfast",
	},
	Volkswagen: {
		name: "Volkswagen",
		slug: "volkswagen",
	},
	Wartburg: {
		name: "Wartburg",
		slug: "wartburg",
	},
	"W Motors": {
		name: "W Motors",
		slug: "w-motors",
	},
	Wanderer: {
		name: "Wanderer",
		slug: "wanderer",
	},
	Weltmeister: {
		name: "Weltmeister",
		slug: "weltmeister",
	},
	Volvo: {
		name: "Volvo",
		slug: "volvo",
	},
	WEY: {
		name: "WEY",
		slug: "wey",
	},
	"Willys-Overland": {
		name: "Willys-Overland",
		slug: "willys-overland",
	},
	Wiesmann: {
		name: "Wiesmann",
		slug: "wiesmann",
	},
	Wuling: {
		name: "Wuling",
		slug: "wuling",
	},
	Westfield: {
		name: "Westfield",
		slug: "westfield",
	},
	"Western Star": {
		name: "Western Star",
		slug: "western-star",
	},
	Yutong: {
		name: "Yutong",
		slug: "yutong",
	},
	Workhorse: {
		name: "Workhorse",
		slug: "workhorse",
	},
	XPeng: {
		name: "XPeng",
		slug: "xpeng",
	},
	"Zarooq Motors": {
		name: "Zarooq Motors",
		slug: "zarooq-motors",
	},
	Zastava: {
		name: "Zastava",
		slug: "zastava",
	},
	Zenvo: {
		name: "Zenvo",
		slug: "zenvo",
	},
	Zenos: {
		name: "Zenos",
		slug: "zenos",
	},
	Zinoro: {
		name: "Zinoro",
		slug: "zinoro",
	},
	Zhongtong: {
		name: "Zhongtong",
		slug: "zhongtong",
	},
	Yulon: {
		name: "Yulon",
		slug: "yulon",
	},
	Zotye: {
		name: "Zotye",
		slug: "zotye",
	},
	ZAZ: {
		name: "ZAZ",
		slug: "zaz",
	},
	Zeekr: {
		name: "Zeekr",
		slug: "zeekr",
	},
};

export const renderAutocompleteOption = ({ option }) => (
	<Group gap="sm">
		<div style={{ width: "30px" }}>
			<BrandLogo brand={brandsData[option.value].slug} page={true} />
		</div>
		<Text size="sm">{option.value}</Text>
	</Group>
);
