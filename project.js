document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.accordion-header').forEach(header =>{
            header.addEventListener('click',() => {
                let content = header.nextElementSibling;
                let plusIcon = header.querySelector('.plus');
                let minusIcon = header.querySelector('.minus');


                if(content.style.display === 'none')
                {
                    content.style.display ='block';
                    plusIcon.style.display = 'none';
                    minusIcon.style.display = 'block';
                }
                else{
                    content.style.display = 'none';
                    plusIcon.style.display = 'block';
                    minusIcon.style.display = 'none';
                }
            });
    });
});