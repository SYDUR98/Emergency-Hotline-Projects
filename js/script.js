    //reusable functions hart start   
    function heartCount(id){
            const manuLoveIconCount = parseInt(document.getElementById(id).innerText);
            // console.log(manuLoveIconCount)
            newManuLoveIconCount = manuLoveIconCount + 1;
            document.getElementById(id).innerText = newManuLoveIconCount;
        }
        
    //reusable functions hart end 

    // reusable functions call section start
         function callCoinCount(id){
            const manueCoinCount = parseInt(document.getElementById(id).innerText)
            // console.log(manueCoinCount)
            if (manueCoinCount < 20) {
                alert('Insufficient coin to call')
                retrun
            }
            alert("Calling National Emergency Number - 999")
            const newManuCoinCount = manueCoinCount - 20;
            // console.log(newManuCoinCount)
            document.getElementById(id).innerText = newManuCoinCount;

            
         }
        // reusable functions call section end  
        
        //reusable copy paste reusable functions start 
        function copyPaste(id){
            const hotNumber = document.getElementById(id).innerText;
            navigator.clipboard.writeText(hotNumber)
            .then(()=>{
                alert("Number copid:"+ hotNumber)
            })
            .catch(err =>{
                console.error("Failed to copy:", err)
            });

        }  
        //reusable copy paste reusable functions end
        
         //reusable copy count functions start
         function copyCount(id){
            const manuCopyCount = parseInt(document.getElementById(id).innerText)
            const newManuCopyCount = manuCopyCount + 1;
            document.getElementById(id).innerText = newManuCopyCount;
         }
        //reusable copy count functions end 
        


        // love icon js
        document.getElementById('card_love_icon').addEventListener('click', function () {
            // const manuLoveIconCount = parseInt(document.getElementById('manu_love_icon_count').innerText);
            // console.log(manuLoveIconCount)
            // newManuLoveIconCount = manuLoveIconCount + 1;
            // document.getElementById('manu_love_icon_count').innerText = newManuLoveIconCount;
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('card_call_icon').addEventListener('click', function () {
            
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">National Emergency <br> Number</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">999</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })

        // history Clean section .
        document.getElementById('history_clean_btn').addEventListener('click',function(){
            document.getElementById('history_create').innerHTML = ``
        })

        // copy btn functionality js
        document.getElementById('card_copy_btn').addEventListener('click',function(){
            // alert("999 number copid")

            // const hotNumber = document.getElementById('em_number').innerText;
            // navigator.clipboard.writeText(hotNumber)
            // .then(()=>{
            //     alert("Number copid:"+ hotNumber)
            // })
            // .catch(err =>{
            //     console.error("Failed to copy:", err)
            // });
            copyPaste('em_number')

            // const manuCopyCount = parseInt(document.getElementById('manu_copy_count').innerText)
            // const newManuCopyCount = manuCopyCount + 1;
            // document.getElementById('manu_copy_count').innerText = newManuCopyCount;

            copyCount('manu_copy_count')
        });