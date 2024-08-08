import {
    prefectures,
    vocab100,
    vocab1000,
    vocab1025,
    vocab1050,
    vocab1075,
    vocab1100,
    vocab1125,
    vocab1150,
    vocab1175,
    vocab1200,
    vocab1225,
    vocab125,
    vocab1250,
    vocab1275,
    vocab1300,
    vocab1325,
    vocab1350,
    vocab1375,
    vocab1400,
    vocab1425,
    vocab1450,
    vocab1475,
    vocab150,
    vocab1500,
    vocab1525,
    vocab1550,
    vocab1575,
    vocab1600,
    vocab1625,
    vocab1650,
    vocab1675,
    vocab1700,
    vocab1725,
    vocab175,
    vocab1750,
    vocab1775,
    vocab1800,
    vocab1825,
    vocab1850,
    vocab1875,
    vocab1900,
    vocab1925,
    vocab1950,
    vocab1975,
    vocab200,
    vocab2000,
    vocab2025,
    vocab2050,
    vocab2075,
    vocab2100,
    vocab2125,
    vocab2150,
    vocab2175,
    vocab2200,
    vocab2225,
    vocab225,
    vocab2250,
    vocab2275,
    vocab2300,
    vocab2325,
    vocab2350,
    vocab2375,
    vocab2400,
    vocab2425,
    vocab2450,
    vocab2475,
    vocab25,
    vocab250,
    vocab2500,
    vocab275,
    vocab300,
    vocab325,
    vocab350,
    vocab375,
    vocab400,
    vocab425,
    vocab450,
    vocab475,
    vocab50,
    vocab500,
    vocab525,
    vocab550,
    vocab575,
    vocab600,
    vocab625,
    vocab650,
    vocab675,
    vocab700,
    vocab725,
    vocab75,
    vocab750,
    vocab775,
    vocab800,
    vocab825,
    vocab850,
    vocab875,
    vocab900,
    vocab925,
    vocab950,
    vocab975
} from "../../data/vocab-data";

export const getLevelData = (level) => {

    switch (level) {
        case 'prefectures': return prefectures;
        case 'level25': return vocab25;
        case 'level50': return vocab50;
        case 'level75': return vocab75;
        case 'level100': return vocab100;
        case 'level125': return vocab125;
        case 'level150': return vocab150;
        case 'level175': return vocab175;
        case 'level200': return vocab200;
        case 'level225': return vocab225;
        case 'level250': return vocab250;
        case 'level275': return vocab275;
        case 'level300': return vocab300;
        case 'level325': return vocab325;
        case 'level350': return vocab350;
        case 'level375': return vocab375;
        case 'level400': return vocab400;
        case 'level425': return vocab425;
        case 'level450': return vocab450;
        case 'level475': return vocab475;
        case 'level500': return vocab500;
        case 'level525': return vocab525;
        case 'level550': return vocab550;
        case 'level575': return vocab575;
        case 'level600': return vocab600;
        case 'level625': return vocab625;
        case 'level650': return vocab650;
        case 'level675': return vocab675;
        case 'level700': return vocab700;
        case 'level725': return vocab725;
        case 'level750': return vocab750;
        case 'level775': return vocab775;
        case 'level800': return vocab800;
        case 'level825': return vocab825;
        case 'level850': return vocab850;
        case 'level875': return vocab875;
        case 'level900': return vocab900;
        case 'level925': return vocab925;
        case 'level950': return vocab950;
        case 'level975': return vocab975;
        case 'level1000': return vocab1000;
        case 'level1025': return vocab1025;
        case 'level1050': return vocab1050;
        case 'level1075': return vocab1075;
        case 'level1100': return vocab1100;
        case 'level1125': return vocab1125;
        case 'level1150': return vocab1150;
        case 'level1175': return vocab1175;
        case 'level1200': return vocab1200;
        case 'level1225': return vocab1225;
        case 'level1250': return vocab1250;
        case 'level1275': return vocab1275;
        case 'level1300': return vocab1300;
        case 'level1325': return vocab1325;
        case 'level1350': return vocab1350;
        case 'level1375': return vocab1375;
        case 'level1400': return vocab1400;
        case 'level1425': return vocab1425;
        case 'level1450': return vocab1450;
        case 'level1475': return vocab1475;
        case 'level1500': return vocab1500;
        case 'level1525': return vocab1525;
        case 'level1550': return vocab1550;
        case 'level1575': return vocab1575;
        case 'level1600': return vocab1600;
        case 'level1625': return vocab1625;
        case 'level1650': return vocab1650;
        case 'level1675': return vocab1675;
        case 'level1700': return vocab1700;
        case 'level1725': return vocab1725;
        case 'level1750': return vocab1750;
        case 'level1775': return vocab1775;
        case 'level1800': return vocab1800;
        case 'level1825': return vocab1825;
        case 'level1850': return vocab1850;
        case 'level1875': return vocab1875;
        case 'level1900': return vocab1900;
        case 'level1925': return vocab1925;
        case 'level1950': return vocab1950;
        case 'level1975': return vocab1975;
        case 'level2000': return vocab2000;
        case 'level2025': return vocab2025;
        case 'level2050': return vocab2050;
        case 'level2075': return vocab2075;
        case 'level2100': return vocab2100;
        case 'level2125': return vocab2125;
        case 'level2150': return vocab2150;
        case 'level2175': return vocab2175;
        case 'level2200': return vocab2200;
        case 'level2225': return vocab2225;
        case 'level2250': return vocab2250;
        case 'level2275': return vocab2275;
        case 'level2300': return vocab2300;
        case 'level2325': return vocab2325;
        case 'level2350': return vocab2350;
        case 'level2375': return vocab2375;
        case 'level2400': return vocab2400;
        case 'level2425': return vocab2425;
        case 'level2450': return vocab2450;
        case 'level2475': return vocab2475;
        case 'level2500': return vocab2500;
    }

    console.log("no data found for this level:", level)

    return false;
}

export const getLevelTitle = (level) => {
    switch (level) {
        case 'prefectures': return '県';
        case 'level25': return 'L1';
        case 'level50': return 'L2';
        case 'level75': return 'L3';
        case 'level100': return 'L4';
        case 'level125': return 'L5';
        case 'level150': return 'L6';
        case 'level175': return 'L7';
        case 'level200': return 'L8';
        case 'level225': return 'L9';
        case 'level250': return 'L10';
        case 'level275': return 'L11';
        case 'level300': return 'L12';
        case 'level325': return 'L13';
        case 'level350': return 'L14';
        case 'level375': return 'L15';
        case 'level400': return 'L16';
        case 'level425': return 'L17';
        case 'level450': return 'L18';
        case 'level475': return 'L19';
        case 'level500': return 'L20';
        case 'level525': return 'L21';
        case 'level550': return 'L22';
        case 'level575': return 'L23';
        case 'level600': return 'L24';
        case 'level625': return 'L25';
        case 'level650': return 'L26';
        case 'level675': return 'L27';
        case 'level700': return 'L28';
        case 'level725': return 'L29';
        case 'level750': return 'L30';
        case 'level775': return 'L31';
        case 'level800': return 'L32';
        case 'level825': return 'L33';
        case 'level850': return 'L34';
        case 'level875': return 'L35';
        case 'level900': return 'L36';
        case 'level925': return 'L37';
        case 'level950': return 'L38';
        case 'level975': return 'L39';
        case 'level1000': return 'L40';
        case 'level1025': return 'L41';
        case 'level1050': return 'L42';
        case 'level1075': return 'L43';
        case 'level1100': return 'L44';
        case 'level1125': return 'L45';
        case 'level1150': return 'L46';
        case 'level1175': return 'L47';
        case 'level1200': return 'L48';
        case 'level1225': return 'L49';
        case 'level1250': return 'L50';
        case 'level1275': return 'L51';
        case 'level1300': return 'L52';
        case 'level1325': return 'L53';
        case 'level1350': return 'L54';
        case 'level1375': return 'L55';
        case 'level1400': return 'L56';
        case 'level1425': return 'L57';
        case 'level1450': return 'L58';
        case 'level1475': return 'L59';
        case 'level1500': return 'L60';
        case 'level1525': return 'L61';
        case 'level1550': return 'L62';
        case 'level1575': return 'L63';
        case 'level1600': return 'L64';
        case 'level1625': return 'L65';
        case 'level1650': return 'L66';
        case 'level1675': return 'L67';
        case 'level1700': return 'L68';
        case 'level1725': return 'L69';
        case 'level1750': return 'L70';
        case 'level1775': return 'L71';
        case 'level1800': return 'L72';
        case 'level1825': return 'L73';
        case 'level1850': return 'L74';
        case 'level1875': return 'L75';
        case 'level1900': return 'L76';
        case 'level1925': return 'L77';
        case 'level1950': return 'L78';
        case 'level1975': return 'L79';
        case 'level2000': return 'L80';
        case 'level2025': return 'L81';
        case 'level2050': return 'L82';
        case 'level2075': return 'L83';
        case 'level2100': return 'L84';
        case 'level2125': return 'L85';
        case 'level2150': return 'L86';
        case 'level2175': return 'L87';
        case 'level2200': return 'L88';
        case 'level2225': return 'L89';
        case 'level2250': return 'L90';
        case 'level2275': return 'L91';
        case 'level2300': return 'L92';
        case 'level2325': return 'L93';
        case 'level2350': return 'L94';
        case 'level2375': return 'L95';
        case 'level2400': return 'L96';
        case 'level2425': return 'L97';
        case 'level2450': return 'L98';
        case 'level2475': return 'L99';
        case 'level2500': return 'L100';
    }

    console.log("no title found for this level:", level)

    return '??';
}

