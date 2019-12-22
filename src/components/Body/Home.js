
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import MemoTile from '../Body/Memos/MemoTile';

const Wrapper = styled.section`
    min-height: 500px;
    background: #f3f6f6bd;
    position: relative;
`;
const AddMemo = styled.a`
    font-weight: bold;
    background-color: #d84b27;
    top: 2%;
    right: 20px;
    cursor: pointer;
    position: absolute;
    text-decoration: none
    height: 50px;
    font-size: 30px;
    width: 50px;
    vertical-align: middle;
    line-height: 50px;
    color: white;
    border-radius: 50%;
    border: 1px solid #d84b27;
`;
const MemoWrapper = styled.div` 
    padding: 1em 5em 1em 5em;
`;

const SortContainer = styled.div` 
    padding: 2em 5em 0em 5em;
    width:100%; 
    right:0;
`;
const Select = styled.select` 
    padding: 1em 5em 1em 5em;
    display: inline-block;
    width:60%; 
    float:left; 
    font-size: 14px;
    height: 29px;
    padding: 5px; /* If you add too much padding here, the options won't show in IE */
    width: 208px;
    right:0;
`;
const NavLeft = styled.div` 
    width:60%; 
    display: inline-block;
`;
const NavRight = styled.div` 
    width:30%; 
    display: inline-block;
`;
const Para = styled.div`  
    float:left;
    padding:0px 10px ;
    display: inline-block;
`;


const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    z-index:32423;
    display: flex;
    align-items: flex-end;
`;
const Dot = styled.div`
    background-color: black;
    border-radius: 50%;
    z-index:32423;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    /* Animation */
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${props => props.delay};
`;

const Home = () => {
    const [memos, setMemos] = useState([]);
    const [loader, setLoader] = useState(false);


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function fetchData() {
            setLoader(true);
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let resJson = await response.json();
            resJson = resJson.slice(1, 10);

            let memos = resJson.map((memo, key) => {
                return { title: memo.title, body: memo.body, uid: memo.id, created_on: '2019-03-01' }
            })
            setMemos(memos);
            setLoader(false);
        }
        fetchData();

    }, []);

    const addMemo = async () => {
        setLoader(true);
        try {
            //Make a dummy axios api call and add new memo 
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: '',
                    body: '',
                    created_on: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            let resJson = await response.json();
            // console.log(resJson, 'resjson');
            let uid = resJson.id;
            let created_on = resJson.created_on;
            setMemos(memos => [...memos, { title: '', body: '', uid: uid, created_on: created_on }]);
            setLoader(false);
            console.log('Add memo');
        } catch (error) {
            setLoader(false);
            console.log('Some error occured while adding a memo.');
            
        }
    }

    const saveMemo = async (uid, title, body) => {
        setLoader(true);
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${uid}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: uid,
                    title: title,
                    body: body,
                    userId: uid
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            if (res) {
                let resJson = await res.json();
                console.log(resJson)
                let memosN = memos.map((memo) => {
                    if (memo.uid === uid) {
                        memo.title = 'New Value';
                        memo.body = body;
                    }
                    return memo;
                });
                setMemos([...memosN]);
                setLoader(false);
                alert("Memo saved successfully.")
                console.log('Saved memo', uid);
            }
        } catch (error) {
            setLoader(false);
            console.log('An error occured while saving a memo.');
            alert('An error occured while saving an empty memo.');
        }
    }
    const deleteMemo = async (uid) => {
        setLoader(true);
        try {

            let res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE'
            })
            console.log('Delete memo', uid, res);
            if (res.ok) {
                setMemos(memos => [...memos.filter((memo) => memo.uid !== uid)]);
                alert('Memo successfully deleted.')
            }
            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.log('Some error occured while deleting a memo.');
        }
    }

    //Sort Fn
    const sortMe = (e) => {
        setLoader(true);
        const { value } = e.target;
        if (value === 'title') {
            //Sort by title.
            let memosN = memos.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            setMemos([...memosN]);
        }
        setLoader(false);
    }

    return (
        <Wrapper >
            <SortContainer>
                <NavLeft></NavLeft>
                <NavRight>
                    <Para>Sort by</Para>
                    <Select onChange={sortMe}>
                        <option value="">Select</option>
                        <option value="title">Title</option>
                        <option disabled value="date">Date</option>
                    </Select>
                </NavRight>
            </SortContainer>
            <AddMemo href="!#" onClick={addMemo}> + </AddMemo>
            {loader && <DotWrapper>
                <Dot delay="0s" />
                <Dot delay=".1s" />
                <Dot delay=".2s" />
            </DotWrapper>}
            <MemoWrapper>
                {memos.map((memo, keyM) => {
                    return <MemoTile
                        title={memo.title}
                        body={memo.body}
                        uid={memo.uid}
                        key = {keyM}
                        created_on={memo.created_on}
                        saveMemo={saveMemo}
                        deleteMemo={deleteMemo} />
                })}
            </MemoWrapper>
        </Wrapper>
    );

};

export default Home;
