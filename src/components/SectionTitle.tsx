type Props={

title:string

subtitle?:string

}

export default function SectionTitle({

title,

subtitle

}:Props){

return(

<>

<p className="section-small">

{subtitle}

</p>

<h2>

{title}

</h2>

</>

)

}