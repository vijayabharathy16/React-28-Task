import React from "react";
import Card from "./card";
function DashBoard() {
    // let carddetail=[{content:"Earnings (Monthly)",data=$40000},{content:"Earnings (Annual)",data=$215000},{content:"Tasks",data="50%"},{content:"Pending Requests",data=18}];
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                <Card border="border-left-primary" icon="fa-calendar" content="Earnings (Monthly)" data="$40000" textcolor="text-primary"></Card>
                <Card border="border-left-success" icon="fa-dollar-sign" content="Earnings (Annual)" data="$215000" textcolor="text-success"></Card>
                <Card border="border-left-info" icon="fa-clipboard-list" content="Tasks" data="50%" textcolor="text-info"></Card>
                <Card border="border-left-warning" icon="fa-comments" content="Pending Requests" data="18" textcolor="text-warning"></Card>
            </div>
        </>
    )
}
export default DashBoard;