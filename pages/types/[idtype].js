export default function Type({type}) {
    console.log(type) 
    return (
        <div>
            
        </div>
    ) 
}

export async function getServerSideProps(context) {
    const type = await fetch(`https://pokeapi.co/api/v2/type/1`)
    const typeJSON = await type.json()

    
    return {
      props: {type:typeJSON},
    }
  }
  