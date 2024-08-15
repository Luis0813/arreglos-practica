/*  let students = [
    {
    name:'ffernando',
    lastname:'doe',
    age: 20,
    course:'marketing'
},
{
    name:'fluis',
    lastname:'doe',
    age: 20,
    course:'diseño'
},
{
    name:'fjose',
    lastname:'doe',
    age: 20,
    course:'arquitectura'
},
{
    name:'fdavid',
    lastname:'doe',
    age: 20,
    course:'medicina'
},
{
    name:'felena',
    lastname:'doe',
    age: 20,
    course:'enfermeria'
}
 ] */
            //EVERY:solo retorna boolenaos si todos los ubjetos cumplen con la condicion 
// include(): revisa unamatriz contiene un determinado elemento
/*  const result = students.every((student) => student.name.includes('f'))
console.log(result) */
 

             // SOME: solo retorna boolenaos si hoy objeros que complen con su condicion

/*  const result = students.some((student)=> {
    if (student.name  === 'fernando') {
        return true
    }
 })
 console.log(result) */





/*                     //FIND: sirve para buscar un objeto  
 const result = students.find((student)=>{
    if (student.age == 26) {
        return 1
    }
 })
 console.log(result)
 */


            //SORT:sirve para ordenar losarreglos por alguna propiedad  recibe 2 paramentros
/* const result = students.sort((a,b) => {
                if (a.name > b.name) {
                    return 1
                }else{
                    return -1
                }
            })
console.log(result) */


/* 
    // los ordena alfabeticamente
let abecedario = [ 'i','a','b','c','d','e','f','g','h',]

console.log(abecedario.sort())
 */

                // reduce 

/* 
let developer = [
{   
    id:1,
    name:'augusto',
    skills:['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP']
},
{   
    id:2,
    name:'augusto',
    skills:['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'REACK', 'TAILWIND']
},
{   
    id:3,
    name:'augusto',
    skills:['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'PITHON', 'C++']
}
]

const result= developer.reduce((allSkills, student) => {
    return  Array.from(new Set([...allSkills, ...student.skills ]))
}, [])
 console.log(result) */



/*  const result = students.reduce( function(total,student) {
      return  total + student.age;
 }, 0)
 console.log(result); */




                //filter: nos permite agrregar un condifional  
/* const arregloCondicional = students.filter((student) =>{
    if (student.name != 'fernando' && student.course != 'enfermeria') {
        console.log(student)
    }
})
 */


                //  MAP
//usamos como referencia el  arreglo de estudiantes para crear otro  nuevo
// hacemos los cambios y guardamos en una variable o constante(el nuevo arrreglo)
/* const fullname = students.map((student)=>{
    return student.name+ ' ' + student.lastname
})
console.log(fullname) */

/* const fullname = students.map((student)=> student.name)
console.log(fullname) */


//cuando se va a hacer una modificacion se abren llaves al return
/* const fullname = students.map((student)=> {
    delete lastname
   return  {
    nombrecompleto: student.name + " " + student.lastname,
    age:student.age
   }
   
})
console.log(fullname)
 */


/* const nowCourse = students.map((student)=> {
    delete lastname
   return  {
    name:student.name,
    lastname:student.lastname, 
    age:student.age,
    course: student.course,
    title:`${student.name}-${student.course}` 
    //para agregar una nueva propiedad al objeto y no tipear cada una de sus propiedades 
    // primero se copian los datos y luego se alteran
    ...student,
    course: 'prigramings',
    title:`${student.name}-${student.course}` 
   }
   
})
console.log(nowCourse)

const doubleAge = nowCourse.map((student) => {
    return{
    ...student,
    age:student.age *2
 } 
})
console.log(doubleAge) */

// encadenando metodos
/* const doubleAge = students.map((student)=> {
    delete lastname
   return  {
  name:student.name,
    lastname:student.lastname, 
    age:student.age,
    course: student.course,
    title:`${student.name}-${student.course}` 
    //para agregar una nueva propiedad al objeto y no tipear cada una de sus propiedades 
    // primero se copian los datos y luego se alteran
    ...student,
    course: 'prigramings',
    title:`${student.name}-${student.course}` 
   }
   
}).map((student) => {
    return{
    ...student,
    age:student.age *2
 } 
})

console.log(doubleAge) */



                //FOREACH
/* students.forEach((students, index , name) => {
    console.log(students)
    console.log(students.name);
    console.log(index)
    console.log(name)
}); 
 //console.log(students);

let fullName = []

 students.forEach((student) => {
    fullName.push(student.name +' '+ student.lastname)
})
console.log(fullName)*/



