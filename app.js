const together = document.querySelector('#together');
        const typed = document.querySelector('input');
        const films = document.querySelector('.films');
        const info = document.querySelector('.info');
        const f = document.querySelector('.f');
        const info_ul = document.querySelector('.info_ul');
        const title = document.querySelector('.title');
        // films.setAttribute("style","margin-bottom:100px; background-color:red");
        // films.setAttribute('style','margin:auto')
        // typed.setAttribute('style', 'border-right: none');
       
        together.addEventListener('submit', async function (e) {
            e.preventDefault();
            films.innerHTML = '';
            const searchTerm = together.elements.query.value;
            const allShows =  await axios.get('https://api.tvmaze.com/search/shows?q='+ searchTerm);
            watch(allShows.data); 
            console.log(allShows.data)
        })

        const watch = (show) => { 
                for (let result of show){
                     
                    info_ul.classList.add('in');
                   if (result.show.image && result.show.network){
                    
                        const picture = result.show.image.medium;
                        let channel = result.show.network.name;
                        let type = result.show.type;
                        let summary = result.show.summary;
                        let status = result.show.status;

                        let name = result.show.name;
                        let url = result.show.url;
                        const i = document.createElement('a');
                        i.href = url;
                        i.innerText = `#${name}`;
                    
                        const img = document.createElement('img');
                        img.src = picture;
                        img.setAttribute('style','  border: 12px solid red; box-shadow: 20px 6px 10px black; margin: 30px 0px;');
                        const a = f.appendChild(img);
                        

                        //info********
                        const h3 = document.createElement('h2');
                        h3.innerHTML = 'On ' + channel;
                        const b = info.appendChild(h3);
                        h3.classList.add('hi'); 
                        // h2.classList.Add('style', 'border-top: 5px solid black; padding: 5px;')

                        const p = document.createElement('p');
                        p.innerHTML = summary;
                        p.setAttribute('style', ' margin-bottom:5px');
                        // const information = document.createElement('h3');
                        // information.innerHTML = '<strong></strong>';
                        // information.setAttribute('style', 'margin: 5px');
                        
                        
                        //type***
                        const li2 = document.createElement('li');
                        li2.innerHTML = 'Type: '+ type;
                        const d = info_ul.appendChild(li2);
                        d.setAttribute('style', 'color:red; margin-bottom:20px')
                        //status***
                        const li3 = document.createElement('li');
                        li3.innerHTML = 'Status: '+ status;
                        const e = info_ul.appendChild(li3);
                        e.setAttribute('style', 'color:red; margin-top:6px');
                        
                        films.appendChild(b);
                        films.appendChild(a);
                        films.appendChild(p);
                        films.appendChild(i);
                        films.appendChild(e);
                        films.appendChild(d);
                        
                        let styles = 
                            `
                            font-family:sans-serif;
                            padding: 40px;
                            `
                        films.style = styles;
                       
                        typed.value = '';
                        typed.focus();
                        
                        
                        
                    } 
                }
            
            }

            //nav************
          
        const hamburger = document.querySelector('.hamburger');
        const navlink = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            navlink.classList.toggle('open');
            
            links.forEach((link) => {
                link.classList.toggle('fade');
            })
           
        })