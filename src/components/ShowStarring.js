import ShowStar from "./ShowStar";

export default function ShowStarring({ stars }) {
  return (
    <>
      {stars.length > 0 && (<h4>Starring</h4>)}
      {stars.map((star, index) => {
        if(index < 4){
          let avatar = star.person.image ? star.person.image.medium : null;
          return (
            <ShowStar 
              key={index} 
              avatar={avatar} 
              name={star.person.name} 
              value={star.character.name} 
            />
          )
        } else return null;
      })}
    </>
  )
}
