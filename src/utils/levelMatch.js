import { vocab100, vocab25, vocab50, vocab75 } from "../../data/vocab-data";

export const getLevelData = (level) => {

    switch (level) {
        case 'level25': return vocab25;
        case 'level50': return vocab50;
        case 'level75': return vocab75;
        case 'level100': return vocab100;
    }

    return false;
}

export const getLevelTitle = (level) => {
    switch (level) {
        case 'level25': return '25';
        case 'level50': return '50';
        case 'level75': return '75';
        case 'level100': return '100';
    }

    return '??';
}

