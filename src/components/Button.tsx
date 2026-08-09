type Props={

text:string

href:string

}

export default function Button({

text,

href

}:Props){

return(

<a

href={href}

className="button"

>

{text}

</a>

)

}