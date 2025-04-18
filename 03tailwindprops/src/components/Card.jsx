import React from 'react'

function Card({username="Sarah Dayan",job="Staff Engineer, Algolia"}){
    //console.log("props",props);
    
    return(
      <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2016/11/19/16/36/mountain-climbing-1840220_960_720.jpg" alt="" width="384" height="512"/>
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              {job}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
    )
}

export default Card