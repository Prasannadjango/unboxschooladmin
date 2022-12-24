const fetchstudentdata = async () => {
    setRetrieving(true)
    await getDocs(collection(db, "Newstudent"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            setStudents(newData);
            console.log(Students, newData);
        })
    setTimeout(() => {
        setRetrieving(false)
        setShow(!show);
    }, 1200)

    

}

useEffect(() => {
    fetchstudentdata();
}, [])