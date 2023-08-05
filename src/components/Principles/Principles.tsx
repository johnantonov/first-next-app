

type item = 
    {
      title: string,
      text: string,
      img: string,
      id: string;
    }

type Props = {
  items: item[]
}



export const Principles = ( { items }: Props ) => {

  const renderItems = () => {
    return items.map(principle => {
      return <div id={principle.id} key={principle.id} className="principle__item">
        <div className="principle__df">
          <div className="principle__info">
            <h5 className="principle__title">{principle.title}</h5>
            <p className="principle__text">{principle.text}</p>
          </div>
          <div className="principle__img">
          </div>
        </div>
      </div>
    })
  } 

  return (
    <section className="principles">
        {renderItems()}
    </section>
  )
}
