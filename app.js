console.log("App running successfully, No error.");

        console.log("Hello Sajid !");

        const netStatus=document.querySelector(".networkStatus");

        window.addEventListener("online",()=>{
            netStatus.innerText="You are Online :)";
            netStatus.style.background="green";
            netStatus.classList.add("active");
            setTimeout(()=>{
                netStatus.classList.remove("active");
            },4000);
        });

        window.addEventListener("offline",()=>{
            netStatus.innerText="You are Offline :(";
            netStatus.style.backgroundColor="red";
            netStatus.classList.add("active");
            setTimeout(()=>{
                netStatus.classList.remove("active");
            },4000);
        });


        // code to switch between dark & light modes ✅

        const themeMode=document.querySelector('.theme-mode');
        let darkMode=localStorage.getItem("darkMode");

        const enableDarkMode=()=>{
           localStorage.setItem("darkMode", "active");
           document.body.classList.add("darkMode");
           themeMode.innerText="Light Mode";
        }

        const disableDarkMode=()=>{
           localStorage.setItem("darkMode", null);
           document.body.classList.remove("darkMode");
           themeMode.innerText="Dark Mode";
        }

        if(darkMode === "active"){
            enableDarkMode();
        }

        themeMode.addEventListener("click", ()=>{
           darkMode=localStorage.getItem("darkMode");
           darkMode!== "active" ? enableDarkMode() : disableDarkMode();
        });

        // code to generate random gradient colors pallete ✅
        
        const division=document.querySelector(".colorPallete");
        division.addEventListener("click",()=>{
             let code=division.style.background;
                navigator.clipboard.writeText(code);
                division.innerText="copied";
                setTimeout(()=>{
                    division.innerText="copy";
                },1500);
            });

        let userColor;

        function addItem(...color){
            userColor=JSON.parse(localStorage.getItem("Colors")) ?? [];
            let colors= {"color1": `${color[0]}`, "color2": `${color[1]}`};
            userColor.push(colors);
            localStorage.setItem("Colors", JSON.stringify(userColor));
            showData();
        }

        function showData(){
            userColor=JSON.parse(localStorage.getItem("Colors"));
            console.log(userColor);
        }

        function removeItem(){
            userColor=JSON.parse(localStorage.getItem("Colors"));
            userColor.splice(0,1);
            localStorage.setItem("Colors", JSON.stringify(userColor));
            showData();
         }

         function clearStorage(){
            localStorage.removeItem("Colors");
            console.log("All color data deleted");
            console.log(userColor);
         }


        const generateRandomColor=()=>{
            const hex="1234567890ABCDEFabcdef";
            let color1="#", color2="#";

            for(let i=0;i<6;i++){
                let randNum=Math.floor(Math.random()*hex.length);
                color1+=hex[randNum];
            }
            for(let i=0;i<6;i++){
                let randNum=Math.floor(Math.random()*hex.length);
                color2+=hex[randNum];
            }
            addItem(color1, color2);
            division.style.background=`linear-gradient(30deg,${color1},${color2})`;
        }
       
        function callItem(){
            generateRandomColor();
        }

        generateRandomColor();