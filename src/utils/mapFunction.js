const mapFunction = (array) => {
    
  return (
    <div className="w-screen flex flex-col">

      <div className="flex flex-row p-8 max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {array.map(item =>
          <div className="border-4 rounded-lg border-devalmostblack xp-4" 
          key={item.id}>

            <h3 
            className="text-2xl text-center bg-devalmostblack text-devyellow p-2">
            {item.title}
            </h3>

            <img 
            src={item.screenshot} 
            alt={item.title} 
            width="100%">
            </img>

            <p 
            className="pt-3 pl-8 pr-8">
            {item.description}
            </p>

            <a 
            className="underline pb-4 pl-8 pr-8 flex flex-wrap break-all" 
            href={item.url} 
            target="_blank"
            rel="noreferrer">
            {item.url}
            </a>

          </div> 
        )}
      </div>
    </div>
  )
}

export default mapFunction;