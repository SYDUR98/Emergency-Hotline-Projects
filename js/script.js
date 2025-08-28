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
        //============================re usabale function end ============================= 

         // history Clean section start.
        document.getElementById('history_clean_btn').addEventListener('click',function(){
            document.getElementById('history_create').innerHTML = ``
        })
        // history Clean section end.

        // =========================== emergency section js start ===========================
        document.getElementById('card_love_icon').addEventListener('click', function () {
            // const manuLoveIconCount = parseInt(document.getElementById('manu_love_icon_count').innerText);
            // console.log(manuLoveIconCount)
            // newManuLoveIconCount = manuLoveIconCount + 1;
            // document.getElementById('manu_love_icon_count').innerText = newManuLoveIconCount;
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('card_call_icon').addEventListener('click', function () {
            alert("Calling National Emergency Number - 999")
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
            copyPaste('am_number')

            // const manuCopyCount = parseInt(document.getElementById('manu_copy_count').innerText)
            // const newManuCopyCount = manuCopyCount + 1;
            // document.getElementById('manu_copy_count').innerText = newManuCopyCount;

            copyCount('manu_copy_count')
        });

         // =========================== emergency section js end ===========================






         // =========================== fire section js start ===========================
        document.getElementById('fire-card2_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('fire_card2_call_icon').addEventListener('click', function () {
            alert("Fire Service Number - 999")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Fire Service Number</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">999</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('fire_card2_copy_btn').addEventListener('click',function(){
            copyPaste('em_number')
            copyCount('manu_copy_count')
        });

         // =========================== fire section js end ===========================



         

        // =========================== police section js start ===========================
        document.getElementById('police_card3_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('police_card3_call_icon').addEventListener('click', function () {
            alert("Police Helpline Number - 999")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Police Helpline Number</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">999</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('fire_card3_copy_btn').addEventListener('click',function(){
            copyPaste('em_number')
            copyCount('manu_copy_count')
        });

         // =========================== police section js end ===========================






         // =========================== ambulance section js start ===========================
        document.getElementById('ambulance_card4_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('ambulance_card4_call_icon').addEventListener('click', function () {
            alert("Ambulance Service -1994-999999")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Ambulance Service</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">1994-999999</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('ambulance_card4_copy_btn').addEventListener('click',function(){
            copyPaste('amb_number')
            copyCount('manu_copy_count')
        });

         // =========================== ambulance section js end ===========================






        // =========================== Women & Child Helpline section js start ===========================
        document.getElementById('women_card5_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('women_card5_call_icon').addEventListener('click', function () {
            alert("Women & Child Helpline -109")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Women & Child Helpline</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">109</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('women_card5_copy_btn').addEventListener('click',function(){
            copyPaste('women_number')
            copyCount('manu_copy_count')
        });

         // =========================== Women & Child Helpline section js end ===========================




         // =========================== Anti Helpline section js start ===========================
        document.getElementById('anti_card6_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('anti_card6_call_icon').addEventListener('click', function () {
            alert("Anti-Corruption Helpline -109")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Anti-Corruption Helpline</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">109</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('anti_card6_copy_btn').addEventListener('click',function(){
            copyPaste('anti_card6_number')
            copyCount('manu_copy_count')
        });

         // =========================== Anti Helpline section js end ===========================





       // =========================== electricity Helpline section js start ===========================
        document.getElementById('electricity_card7_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('electricity_card7_call_icon').addEventListener('click', function () {
            alert("Electricity Helpline -109")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Electricity Helpline</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">16216</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('electricity_card7_copy_btn').addEventListener('click',function(){
            copyPaste('electricity_card7_number')
            copyCount('manu_copy_count')
        });

         // =========================== electricity Helpline section js end =========================== 
         
         





         // =========================== Brac Helpline section js start ===========================
        document.getElementById('brac_card8_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('brac_card8_call_icon').addEventListener('click', function () {
            alert("Brac Helpline -16445")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Brac Helpline</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">16445</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('brac_card8_copy_btn').addEventListener('click',function(){
            copyPaste('brac_card8_number')
            copyCount('manu_copy_count')
        });

         // =========================== Brac Helpline section js end ===========================  







         // =========================== Bangladesh Railway Helpline section js start ===========================
        document.getElementById('railway_card9_love_icon').addEventListener('click', function () {
            heartCount('manu_love_icon_count')
        })

        // calling icon js 
        document.getElementById('railway_card9_call_icon').addEventListener('click', function () {
            alert("Bangladesh Railway -163")
            callCoinCount('manue_coin_count')

            const parentElement = document.getElementById('history_create');

            const newElement = document.createElement('section')
            newElement.innerHTML = `
            <div class=" flex justify-between items-center bg-[#fafafa] p-3 rounded-md mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">Bangladesh Railway</h3>
                        <h4 class="text-[18px] text-[#5c5c5c]">163</h4>
                    </div>
                    <div>
                        <h4 class="text-[18px]">${new Date().toLocaleTimeString()}</h4>
                    </div>
                </div>
            
            `
            parentElement.appendChild(newElement)

        })
        // copy btn functionality js
        document.getElementById('railway_card9_copy_btn').addEventListener('click',function(){
            copyPaste('railway_card9_number')
            copyCount('manu_copy_count')
        });

         // =========================== Bangladesh Railway Helpline section js end ===========================  
        



         



         