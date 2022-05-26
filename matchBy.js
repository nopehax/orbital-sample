const types = ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP", "ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"];
const compatibility = [ [75, 75, 75, 100, 75, 100, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0],
                        [75, 75, 100, 75, 100, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0],
                        [75, 100, 75, 75, 75, 75, 75, 100, 0, 0, 0, 0, 0, 0, 0, 0],
                        [100, 75, 75, 75, 75, 75, 75, 75, 100, 0, 0, 0, 0, 0, 0, 0],
                        [75, 100, 75, 75, 75, 75, 75, 100, 50, 50, 50, 50, 25, 25, 25, 25],
                        [100, 75, 75, 75, 75, 75, 100, 75, 50, 50, 50, 50, 50, 50, 50, 50],
                        [75, 75, 75, 75, 75, 100, 75, 75, 50, 50, 50, 50, 25, 25, 25, 100],
                        [75, 75, 100, 75, 100, 75, 75, 75, 50, 50, 50, 50, 25, 25, 25, 25],
                        [0, 0, 0, 100, 50, 50, 50, 50, 25, 25, 25, 25, 50, 100, 50, 100],
                        [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 100, 50, 100, 50],
                        [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 50, 100, 50, 100],
                        [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 100, 50, 100, 50],
                        [0, 0, 0, 0, 25, 50, 25, 25, 50, 100, 50, 100, 75, 75, 75, 75],
                        [0, 0, 0, 0, 25, 50, 25, 25, 100, 50, 100, 50, 75, 75, 75, 75],
                        [0, 0, 0, 0, 25, 50, 25, 25, 50, 100, 50, 100, 75, 75, 75, 75],
                        [0, 0, 0, 0, 25, 50, 100, 25, 100, 50, 100, 50, 75, 75, 75, 75] ]

export function matchByType(first, second) {
     return compatibility[types.indexOf(first)][types.indexOf(second)];
}

export function matchByMods(first, second) {
     return first.filter( n => second.indexOf(n) !== -1).length;
}

export function totalMatch(typeMatch, modMatch, l1, l2) { //l1 and l2 is the number of mods taken by each person
     return (typeMatch*0.6)+((modMatch/Math.min(l1, l2) * 100)*0.4);

}
 





const mod1 = ["science", "math", "chinese"];
const mod2 = ["math"];

