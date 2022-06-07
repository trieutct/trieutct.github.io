const username=document.getElementById('username');
const password=document.getElementById('userpassword');
const userpassword_nhaplai=document.getElementById('userpassword_nhaplai');
const dangky=document.querySelector('form .submit');

const username_pattrern=/^[a-z0-9_-]{3,16}$/;
const password_pattrern=/^[A-Za-z0-9_\.]{6,32}$/;

const username_erro=document.querySelector('form .username_erro');
const userpassword_erro=document.querySelector('form .userpassword_erro');
const userpassword_nhaplai_erro=document.querySelector('form .userpassword_nhaplai_erro');
dangky.addEventListener('click',(event)=>{
    let value_username=username.value;
    let value_password=password.value;
    let value_password_nhaplai=userpassword_nhaplai.value;
    if(value_username.length==0)
    {
        username_erro.style.display='block';
    }
    else
    {
        if(!value_username.match(username_pattrern))
        {
            username_erro.style.display='block';
            username_erro.textContent='Tài khoản không đúng dịnh dạng';
        }
        else
        {
            username_erro.style.display='none';
        }
    }
    if(value_password.length==0)
    {
        userpassword_erro.style.display='block';
    }
    else
    {
        userpassword_erro.style.display='none';
    }
    if(value_password_nhaplai.length==0)
    {
        userpassword_nhaplai_erro.style.display='block';
    }
    else
    {
        if(value_password_nhaplai!=value_password)
        {
            userpassword_nhaplai_erro.style.display='block';
            userpassword_nhaplai_erro.textContent='2 mật khẩu không giống nhau';
        }
        else
        userpassword_nhaplai_erro.style.display='none';
    }
})














