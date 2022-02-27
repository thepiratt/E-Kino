

​export​ ​function​ ​toBase64​(​file​: ​File​)​: ​Promise​<​string​>​ ​{ 
    ​  ​return​ ​new​ ​Promise​(​(​resolve​,​ ​reject​)​ ​=>​ ​{ 
    ​    ​const​ ​reader​ ​=​ ​new​ ​FileReader​(​)​; 
    ​    ​reader​.​readAsDataURL​(​file​)​; 
    ​    ​reader​.​onload​ ​=​ ​(​)​ ​=>​ ​resolve​(​reader​.​result​ ​as​ ​string​)​; 
    ​    ​reader​.​onerror​ ​=​ ​(​err​)​ ​=>​ ​reject​(​err​)​; 
    ​  ​}​)​; 
    ​}



export function formatDateFormData(date: Date){
    date = new Date(date);
    const format = new Intl.DateTimeFormat('en',{
        year:'numeric',
        month:'2-digit',
        day:'2-digit'
    });

    const[
        {value:month},,
        {value:day},,
        {value:year}

    ]=format.formatToParts(date);

    return `${year}-${month}-${day}`;
}