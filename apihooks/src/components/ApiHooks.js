import React, { useState, useEffect } from 'react'

function Pokemon ({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

function ApiHooks() {
    const [pokemons, setPokemons] = useState([])
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let mounted = true;
        
        const getPokemons = async(url) =>{
            let res= await fetch(url),
            json = await res.json();

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json();
                
                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default,
                };

                if (mounted) {
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                };
            });
        }

        getPokemons("https://pokeapi.co/api/v2/pokemon");

        return () => mounted = false
        
    }, [])

    function PokemonMap() {
        return (pokemons.map(
            (el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
            )))
    }

    return (
        <>
        <h2>Petición PokeApi con Hooks</h2>
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
        {visible && <PokemonMap />}
        
        </>
    )
}

export default ApiHooks