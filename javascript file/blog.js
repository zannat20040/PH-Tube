const blog =[
    {
        title:'Discuss the scope of var, let, and const',
        answer:`1. var: It is function-scoped and global scoped. We can updated its value and redeclared it. We can also declared it without initialized.Also it can be used before it's declaration.

        2. let: It is block scoped variable. It can be accessed from its block only. We can updated its value but we can't redeclared it. But can declared it without initialized. And it can't be used before it's declaration.

        3.const: It is also block scoped variable. It can be accessed from its block only. It can't be reassign or redeclared. Also it can't be declared without initialized. And it also can't be used before it's declaration.`

    },
    {
        title:'Tell us the use cases of null and undefined',
        answer: `1. null: It means empty value which we assign in a variable on purpose. 
        
        2. undefined: It means uninitialized value. That mean's when a variable is declared but not initialized or when you try to access a variable or property which doesn't exist, tehn teh compiler gives the result 'undefined' automatically which means also a empty value.
        
        So, basically the main difference between null and undefined are, boths are empty value, but null is set intentionally. Whereas, any uninitialized variable sets its value undefined by default`
    },
    {
        title:'What do you mean by REST API?',
        answer:`REST API is a type of API which stands for Representational State Transfer Application Programming Interface.It is list of resourse which you can use to interact with the server to get some specific data by making request.
        
        Such as: 
        
        1.GET : We can use it to get the data from server.
        2.PUSH: We can use it to update data on server.
        3.DELETE: We can use it to delete any data from server.`
    }

]

blog.map(element=>{
    console.log()
    const getBlogContainer = document.getElementById('blog-container')
    const createAccordian = `<div class="collapse collapse-plus bg-base-200 mb-3">
    <input type="radio" name="my-accordion-3" checked="checked" /> 
    <div class="collapse-title text-lg font-medium">${element.title}</div>
    <div class="collapse-content"> 
      <p class="whitespace-pre-line">${element.answer}</p>
    </div>
    </div>`

    getBlogContainer.innerHTML += createAccordian


})



