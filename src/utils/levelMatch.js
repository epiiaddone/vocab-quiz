import {
    vocab100,
    vocab1000,
    vocab125,
    vocab150,
    vocab175,
    vocab200,
    vocab225,
    vocab25,
    vocab250,
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
    }

    return false;
}

export const getLevelTitle = (level) => {
    switch (level) {
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
    }

    return '??';
}

