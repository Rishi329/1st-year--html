var fruittype=prompt("konsa frout chahiye");
switch (fruittype) {
    case 'aam':
        console.log("RS 60 per kg");
        break;
    case 'banana':
        console.log("RS 35 per kg");
        break;
    case 'Apple':
        console.log("Rs 250 per kg ") ;
        break;
    default:
        console.log($`{fruittype}aaj khatam huye h kal milenge`);
}
console.log("aur kuch chiye");