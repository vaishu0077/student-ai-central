
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const SchedulePage = () => {
  const scheduleItems = [
    { day: "Monday", courses: [
      { time: "09:00 AM - 10:30 AM", name: "Introduction to Computer Science", location: "Room 201", type: "Lecture" },
      { time: "11:00 AM - 12:30 PM", name: "Calculus I", location: "Room 105", type: "Lecture" },
      { time: "02:30 PM - 04:30 PM", name: "Physics Lab", location: "Lab Building B", type: "Laboratory" },
    ]},
    { day: "Tuesday", courses: [
      { time: "09:00 AM - 10:30 AM", name: "English Literature", location: "Room 302", type: "Lecture" },
      { time: "11:00 AM - 12:30 PM", name: "Data Structures", location: "Room 201", type: "Lecture" },
      { time: "02:00 PM - 03:30 PM", name: "Economics 101", location: "Room 107", type: "Lecture" },
    ]},
    { day: "Wednesday", courses: [
      { time: "10:00 AM - 12:00 PM", name: "Chemistry Lab", location: "Lab Building C", type: "Laboratory" },
      { time: "01:00 PM - 02:30 PM", name: "Calculus I", location: "Room 105", type: "Lecture" },
      { time: "03:00 PM - 04:30 PM", name: "Academic Writing", location: "Room 304", type: "Workshop" },
    ]},
    { day: "Thursday", courses: [
      { time: "09:00 AM - 10:30 AM", name: "Introduction to Computer Science", location: "Room 201", type: "Lecture" },
      { time: "11:00 AM - 12:30 PM", name: "Physics", location: "Room 102", type: "Lecture" },
      { time: "02:00 PM - 03:30 PM", name: "Economics 101", location: "Room 107", type: "Lecture" },
    ]},
    { day: "Friday", courses: [
      { time: "09:30 AM - 11:00 AM", name: "English Literature", location: "Room 302", type: "Lecture" },
      { time: "11:30 AM - 01:00 PM", name: "Data Structures", location: "Room 201", type: "Lecture" },
      { time: "01:00 PM - 03:00 PM", name: "Computer Science Lab", location: "Lab Building A", type: "Laboratory" },
    ]},
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Lecture':
        return 'bg-academy-primary/10 text-academy-primary';
      case 'Laboratory':
        return 'bg-academy-teal/10 text-academy-teal';
      case 'Workshop':
        return 'bg-academy-secondary/10 text-academy-secondary';
      default:
        return 'bg-academy-amber/10 text-academy-amber';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Class Schedule</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">May 8 - 12, 2025</span>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Change Week
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {scheduleItems.map((daySchedule) => (
          <Card key={daySchedule.day} className="card-gradient">
            <CardHeader className="pb-2">
              <CardTitle>{daySchedule.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {daySchedule.courses.map((course, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900">
                    <div className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-800">
                      <Clock className="h-5 w-5 text-academy-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{course.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{course.time}</span>
                        <span className="text-sm text-muted-foreground">{course.location}</span>
                      </div>
                      <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium mt-2 ${getBadgeColor(course.type)}`}>
                        {course.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Add missing Button component import
import { Button } from "@/components/ui/button";

export default SchedulePage;
