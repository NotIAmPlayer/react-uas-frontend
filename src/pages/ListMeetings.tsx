import { useEffect, useState } from 'react'
import '../index.css'
import { Meeting } from '../interface/Meetings';

function ListMeetings() {
    const url = "go-uas-backend-production.up.railway.app:8080";

    const [meetingData, setMeetingData] = useState([] as Meeting[]);

    useEffect(() => {
        fetch(`${url}/api/meetings`).then((response) => response.json()).then((data) => {
            setMeetingData(data);
        });
    }, []);

    return (
        <div className="bg-slate-200 min-h-screen h-full flex">
            <nav className="w-3/12 bg-slate-600 min-h-screen h-max overflow-none py-8 text-white shadow-2xl shadow-slate-700">
                <p className="font-bold text-2xl px-6">DASHBOARD</p>
                <a
                    href="#"
                    className="block py-2 my-2 px-8 border-b border-transparent bg-white
                    font-semibold transition motion-reduce:transition-none ease-out
                    duration-150 text-black hover:bg-amber-400"
                >
                    Meetings
                </a>
                <a
                    href="/staffs/"
                    className="block py-2 my-2 px-8 border-b border-slate-400
                    font-semibold transition motion-reduce:transition-none ease-out
                    duration-150 hover:text-black hover:bg-amber-400 hover:border-transparent"
                >
                    Staff
                </a>
                <a
                    href="/locations/"
                    className="block py-2 my-2 px-8 border-b border-slate-400
                    font-semibold transition motion-reduce:transition-none ease-out
                    duration-150 hover:text-black hover:bg-amber-400 hover:border-transparent"
                >
                    Locations
                </a>
            </nav>
            <div className="w-9/12 py-8 px-4 h-full min-h-screen">
                <div className="flex justify-between">
                    <h1 className="font-bold text-4xl mb-4">Meetings</h1>
                    <a href="new_meeting.html">
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-800 my-2 px-4 py-2
                            text-white font-bold rounded-xl"
                        >
                            Add
                        </button>
                    </a>
                </div>
                <div className="max-h-full">
                    <table className="w-full" id="meeting_table">
                        <thead>
                            <tr>
                                <th className="w-1/12 bg-slate-400 py-1 px-1 border border-black">ID</th>
                                <th className="w-2/12 bg-slate-400 py-1 px-1 border border-black">Title</th>
                                <th className="w-3/12 bg-slate-400 py-1 px-1 border border-black">Description</th>
                                <th className="w-2/12 bg-slate-400 py-1 px-1 border border-black">Date/Time</th>
                                <th className="w-2/12 bg-slate-400 py-1 px-1 border border-black">Meeting Type</th>
                                <th className="w-2/12 bg-slate-400 py-1 px-1 border border-black">Action</th>
                            </tr>
                        </thead>
                        {meetingData.map((val, idx) => {
                            return <tbody key={idx}>
                                <tr>
                                    <td className="py-1 bg-white px-1 border border-black">{val.meeting_id}</td>
                                    <td className="py-1 bg-white px-1 border border-black">{val.title}</td>
                                    <td className="py-1 bg-white px-1 border border-black">{val.description}</td>
                                    <td className="py-1 bg-white px-1 border border-black">{val.meeting_date}<br />{"(" + val.start_time + " - " + val.end_time + ")"}</td>
                                    <td className="py-1 bg-white px-1 border border-black">{val.meeting_type}</td>
                                    <td className="py-1 bg-white px-1 border border-black"></td>
                                </tr>
                            </tbody>
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListMeetings
