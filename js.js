let generate =  document.querySelector('#generate')
let persons  = document.querySelector('.by')
let quote =  document.querySelector('.quote')
const xikmad = [
    {   quote:
        'Nolosha waa dhabar adeeg iyo nashado ',
        person:'macaed'
    },
{quote:
    'progrmaer are the best',
    person:'shikh cali'
},
{quote:
    'Waligaa hais dhiibin ',
    person:'amir'
},
{quote:
    'ilaahey talo saaro',
    person:'ismail mohamed jamal '
},
{quote:
    'inad developer noqot waxa  ka horaysho inaad silca inad developer noqot waxa  ka horaysho inaad silcado',
    person:'developer'
},
]
generate.addEventListener('click',function(){
let random  = Math.floor(Math.random() * xikmad.length )
quote.innerHTML = xikmad[random].quote
persons.innerHTML = xikmad[random].person

})