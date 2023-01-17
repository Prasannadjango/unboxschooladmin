import React, { useState, useContext,useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Dashboardcontext } from "../App";



function Dashboardresponse(){

const {Totalstudents,Totalclasses,Totalteachers,Totalblogs,Totalsubjects,Totalsections} = useContext(Dashboardcontext)

const [Totalstudentvalue,setTotalstudentvalue] = Totalstudents;
const [Totalclassesvalue,setTotalclassesvalue] = Totalclasses;
const [Totalteachersvalue, setTotalteachersvalue] = Totalteachers ;
const [Totalblogsvalue,setTotalblogsvalue] = Totalblogs;
const [Totalsubjectsvalue,setTotalsubjectsvalue] = Totalsubjects;
const [Totalsectionsvalue,setTotalsectionsvalue] = Totalsections;

// fetch students data
    const fetchstudentdata = async () => {
       
        await getDocs(collection(db, "Newstudent"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
               
                setTotalstudentvalue(newData.length);
              

            })
       



    }

    useEffect(() => {
        fetchstudentdata();
    }, [])

// Fetch class data
   const fetchstudentclass = async () => {

        await getDocs(collection(db, "Newclass"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTotalclassesvalue(newData.length);
             })

    }

    useEffect(() => {
        fetchstudentclass();
    }, [])

// fetch teacher data
 const fetchteacherdata = async () => {
       
        await getDocs(collection(db, "Newteacher"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTotalteachersvalue(newData.length);

            })
      

    }

    useEffect(() => {

        fetchteacherdata();

    },
        [])


// fecth blogs data

  const fetchblogsdata = async () => {
        
        await getDocs(collection(db, "NewBlogs"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTotalblogsvalue(newData.length);
              
            })
       
    }

    useEffect(() => {
        fetchblogsdata();
    }, [])

// fetech subject data

const fetchsubject = async () => {
  
    await getDocs(collection(db, "Newsubject"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            setTotalsubjectsvalue(newData.length);
            
        })
  
}

useEffect(() => {
    fetchsubject();
}, [])


// fetch section data


const fetchstudentsection = async () => {
    
    await getDocs(collection(db, "Newsection"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            setTotalsectionsvalue(newData.length);
          
        })
   

}

useEffect(() => {
    fetchstudentsection();
}, [])



// fetech school data









}





export default Dashboardresponse;