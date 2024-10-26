import React from 'react';

const List = ({celebrants}) => {
        return (
               <section>
                 {celebrants.map((celebrant) => {
                    const {id, name, age, image} = celebrant;
                    return (
                        <article className="person" key={id}>
                            <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </article>
                    )
                 })}
               </section>
        )
        }
    
  
  
  export default List;