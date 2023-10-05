// alert();
var pNameInput =document.getElementById("pNameId");
var pPriceInput =document.getElementById("pPriceId");
var pCatInput =document.getElementById("pCatId");
var pDescInput =document.getElementById("pDescId");

var cartonaa; 
var currentIndex;
if(localStorage.getItem("ouerStorge")==null)
{
    cartonaa=[]
}
else
{
 cartonaa=JSON.parse(localStorage.getItem("ouerStorge"));
 displayProduct();

}


function addProduct()
{
    var oneproduct ={
        pName:pNameInput.value,
        pPrice:pPriceInput.value,
        pCat:pCatInput.value,
        pDesc:pDescInput.value
    }

    cartonaa.push(oneproduct)
    localStorage.setItem("ouerStorge",JSON.stringify(cartonaa));
    displayProduct();



    clearInputs()
}


function clearInputs()
{
    pNameInput.value="";
    pPriceInput.value="";
    pCatInput.value="";
    pDescInput.value="";

}



function displayProduct()
{

    var hasalah =``;
    for(var i=0;i<cartonaa.length;i++)
    {


        hasalah +=  `<tr>
        <td>${i}</td>
        <td>${cartonaa[i].pName}</td>
        <td>${cartonaa[i].pPrice}</td>
        <td>${cartonaa[i].pCat}</td>
        <td>${cartonaa[i].pDesc}</td>
                        <td>
                            <button onclick="setDataInput(${i})" class="btn btn-outline-warning">set Data in Input</button>
                        </td>
                        <td>
                            <button onclick="deleteProduct(${i})" class="btn btn-outline-warning">Delete</button>

                        </td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML=hasalah;
}

function deleteProduct(pIndex)
{
    cartonaa.splice(pIndex,1);
    displayProduct();
    localStorage.setItem("ouerStorge",JSON.stringify(cartonaa));
}


function searchProduct(userword)
{
    var hasalah="";
    for(var i=0;i<cartonaa.length;i++)
    {
        if(cartonaa[i].pName.toLowerCase().includes(userword.toLowerCase()) )
        {
            hasalah +=  `<tr>
        <td>${i}</td>
        <td>${cartonaa[i].pName}</td>
        <td>${cartonaa[i].pPrice}</td>
        <td>${cartonaa[i].pCat}</td>
        <td>${cartonaa[i].pDesc}</td>
                        <td>
                            <button class="btn btn-outline-warning">set Data in Input</button>
                        </td>
                        <td>
                            <button onclick="deleteProduct(${i})" class="btn btn-outline-warning">Delete</button>

                        </td>
                        </tr>`

        }
    }
    document.getElementById("tbody").innerHTML=hasalah;


}





function setDataInput(pIndex)
{
    pNameInput.value=cartonaa[pIndex].pName;
    pPriceInput.value=cartonaa[pIndex].pPrice;
    pCatInput.value=cartonaa[pIndex].pCat;
    pDescInput.value=cartonaa[pIndex].pDesc;

    document.getElementById("addBtn").style.display= "none";
    document.getElementById("updateBtn").style.display="block";
    currentIndex =pIndex;


}


function updateProduct()
{
    var oneproduct ={
        pName:pNameInput.value,
        pPrice:pPriceInput.value,
        pCat:pCatInput.value,
        pDesc:pDescInput.value
    }

    cartonaa[currentIndex]=oneproduct;
    displayProduct()
    clearInputs()
    localStorage.setItem("ouerStorge",JSON.stringify(cartonaa))
    document.getElementById("addBtn").style.display= "block";
    document.getElementById("updateBtn").style.display="none";

    
}





