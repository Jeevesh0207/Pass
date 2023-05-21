
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let symbol = ['!', '@', '#']


let FunP = [
    'password',
    'ineedapassword',
    'changeme',
    'secret',
    'iamforgetful',
    'newpassword',
    'IamACompleteIdiot',
    'nothing',
    'nothingagain',
    'iforgot',
    'whydoialwaysforget',
    'qwerty',
    'asdf',
    'aslpls (old-school mIRC users will remember this)',
    'user',
    'YouWontGuessThisOne',
    'PasswordShmashword',
    'youmoron',
    'doubleclick',
    'iamnottellingyoumypw',
    'masterpassword',
    'yetanotherpassword',
    'nomorepasswords',
    'password123',
]

let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let funny = document.getElementById("funny")


class Passwords {
    constructor(pass) {
        this.pass = pass
    }
    Easy(num, char, sym, Csym, VAL) {
        let numS = Number.parseInt(num), charS = Number.parseInt(char), symS = Number.parseInt(sym), CsymS = Number.parseInt(Csym)
        let pass = ""
        let i = 0;


        while (CsymS--) {
            pass += (alpha[i].toUpperCase())
            if (i >= alpha.length - 1) {
                i = 0;
                continue;
            }
            i++
        }
        i = 0;
        while (charS--) {
            pass += alpha[i]
            if (i >= alpha.length - 1) {
                i = 0;
                continue;
            }
            i++;
        }
        i = 0;
        while (numS--) {

            pass += number[i]
            if (i >= number.length - 1) {
                i = 0;
                continue;
            }
            i++
        }
        i = 0;
        while (symS--) {
            pass += symbol[i]
            if (i >= symbol.length - 1) {
                i = 0;
                continue;
            }
            i++
        }
        this.pass = pass;
        // Result
        if (VAL == 1)
            {
                // console.log(pass)
                addRES(this.pass)
            }

    }
    Medium(num, char, sym, Csym, VAL) {
        this.Easy(num, char, sym, Csym, VAL)
        let len = (this.pass).length
        let PAS = this.pass
        let a = PAS.substring(0, len / 2);
        let b = PAS.substring((len / 2), len);
        // Result
        if (VAL == 2)
        {
            // console.log(b + a)
            addRES(a+b)
        }
    }
    Hard(num, char, sym, Csym, VAL) {
        this.Easy(num, char, sym, Csym, VAL)
        let HPAS = this.pass
        let numS = Number.parseInt(num), charS = Number.parseInt(char), symS = Number.parseInt(sym), CsymS = Number.parseInt(Csym)
        let part = (HPAS.length) / 4
        let a = HPAS.substring(0, part)
        let b = HPAS.substring(part, 2 * part)
        let c = HPAS.substring(2 * part, 3 * part)
        let d = HPAS.substring(3 * part, HPAS.length)
        if (VAL == 3)
            {
                // console.log(a + c + b + d)
                addRES(a+c+b+d)
            }
    }
    Funny(VAL) {
        let num = Math.floor(Math.random() * FunP.length)
        if (VAL == 4)
         {
            // console.log(FunP[num])
            addRES(FunP[num])
         }   
    }
}

let P = new Passwords()

// P.Easy(3, 3, 3, 3)
// P.Medium(3, 3, 3, 3)
// P.Hard(3, 3, 3, 4)
// P.Funny()




function myfun(num) {
    let a = document.getElementById("capital").value
    document.getElementById("capital").value = ""
    let b = document.getElementById("small").value
    document.getElementById("small").value = ""
    let c = document.getElementById("numeric").value
    document.getElementById("numeric").value = ""
    let d = document.getElementById("symbol").value
    document.getElementById("symbol").value = ""
    num = Number.parseInt(num)
    if (a != 0 && b != 0 && c != 0 && d != 0) {
        if (num == 1) {
            P.Easy(a, b, c, d, num)
        }
        else if (num == 2) {
            P.Medium(a, b, c, d, num)
        }
        else if (num == 3) {
            P.Hard(a, b, c, d, num)
        }
        
    }
    if (num == 4) {
        P.Funny(num)
    }
}


//   console.log(a,b,c,d)
easy.addEventListener('click', (e) => {
    // console.log(e)
    myfun(1)
})
medium.addEventListener('click', (e) => {
    // console.log(e)
    myfun(2)
})
hard.addEventListener('click', (e) => {
    // console.log(e)
    myfun(3)
})
funny.addEventListener('click', (e) => {
    // console.log(e)
    myfun(4)
})
    //     medium.addEventListener('click',P.Medium(a,b,c,d))
    //     hard.addEventListener('click',P.Hard(a,b,c,d))
    //     funny.addEventListener('click',P.Funny())
    // }


let res=document.getElementById("Result")    

function addRES(str){
    ihtml=""
    ihtml=`
       <h2>${str}</h2>
    `
    res.innerHTML=ihtml
}    
