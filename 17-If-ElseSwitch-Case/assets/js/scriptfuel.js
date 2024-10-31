let dizelprice = 0.9;
let benzinprice = 1;
let premiumprice = 1.5;
let fuelchoice = prompt("1-Dizel\n 2-Benzin\n 3-Premium");
let fuelprice;
switch (fuelchoice) {
    case "1":
        fuelprice = dizelprice;
        break;
        case "2":
            fuelprice = benzinprice;
            break;
            case "3":
                fuelprice = premiumprice;
                break;
                default:
                    alert ("Lütfən, düzgün Yanacaq Tipi daxil edin.");
                    break;
}

let fuelamount = parseFloat(prompt("neçə litr yanacaq isteyirsen"));
let balance = parseFloat(prompt("balansini daxil ele AZN ilə"));
let totalcost = fuelamount * fuelprice;

    if (balance >= totalcost) {
        let remainingbalance = balance - totalcost;
        alert (`emeliyyat ugurludur odediyiniz mebleg ${totalcost} azn qalan balansiniz: ${remainingbalance} azn`);
    }
    else {
        let deficit = totalcost - balance;
        alert (`emeliyyat ugursuzdur umumi mebleg ${totalcost} azn movcud balans: ${balance} azn catismayan mebleg: ${deficit} azn`);
    }