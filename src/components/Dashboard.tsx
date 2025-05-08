
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, Clock, MessageSquare, Book, Search } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard: React.FC = () => {
  const upcomingEvents = [
    { id: 1, name: "Physics Lab", date: "Today, 2:30 PM", location: "Lab Complex B" },
    { id: 2, name: "Mathematics Assignment", date: "Tomorrow, 11:59 PM", location: "Online Submission" },
    { id: 3, name: "Computer Science Quiz", date: "May 10, 10:00 AM", location: "Room 302" },
    { id: 4, name: "English Literature Seminar", date: "May 12, 3:00 PM", location: "Auditorium" },
  ];

  const recentNotes = [
    { id: 1, title: "Quantum Physics Notes", subject: "Physics", date: "May 2, 2025" },
    { id: 2, title: "Database Systems", subject: "Computer Science", date: "April 28, 2025" },
    { id: 3, title: "Calculus II", subject: "Mathematics", date: "April 25, 2025" },
  ];

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* AI Assistant Quick Access */}
          <Card className="col-span-full lg:col-span-2 card-gradient">
            <CardHeader className="pb-2">
              <CardTitle className="text-academy-primary flex items-center gap-2">
                <Search className="h-5 w-5" />
                AI Academic Assistant
              </CardTitle>
              <CardDescription>Ask anything about your academics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mb-3">
                <p className="text-sm text-slate-500 dark:text-slate-400">Try asking:</p>
                <div className="mt-2 space-y-2">
                  <p className="text-sm font-medium">"Show me my lab schedule for this week"</p>
                  <p className="text-sm font-medium">"Find notes on quantum physics"</p>
                  <p className="text-sm font-medium">"When is my next assignment due?"</p>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask any academic question..."
                  className="w-full p-3 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-academy-primary"
                />
                <Button className="absolute right-1 top-1 h-8">Ask</Button>
              </div>
            </CardContent>
          </Card>

          {/* Course Progress */}
          <Card className="card-gradient">
            <CardHeader className="pb-2">
              <CardTitle className="text-academy-teal flex items-center gap-2">
                <Book className="h-5 w-5" />
                Course Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Computer Science</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mathematics</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Physics</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Courses</Button>
            </CardFooter>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="card-gradient">
            <CardHeader className="pb-2">
              <CardTitle className="text-academy-amber flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-academy-amber/10 p-2 rounded-md">
                <h4 className="font-medium">Programming Assignment</h4>
                <p className="text-xs text-muted-foreground">Due in 2 days</p>
              </div>
              <div className="bg-academy-primary/10 p-2 rounded-md">
                <h4 className="font-medium">Physics Lab Report</h4>
                <p className="text-xs text-muted-foreground">Due in 5 days</p>
              </div>
              <div className="bg-academy-teal/10 p-2 rounded-md">
                <h4 className="font-medium">Mathematics Quiz</h4>
                <p className="text-xs text-muted-foreground">Due in 1 week</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">All Assignments</Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3">
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="notes">Recent Notes</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-academy-primary flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start gap-3 border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                          <Calendar className="h-4 w-4 text-academy-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{event.name}</h3>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Full Schedule</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-academy-secondary flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recent Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentNotes.map((note) => (
                      <div key={note.id} className="flex items-start gap-3 border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                          <FileText className="h-4 w-4 text-academy-secondary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{note.title}</h3>
                          <p className="text-sm text-muted-foreground">{note.subject}</p>
                          <p className="text-sm text-muted-foreground">Updated: {note.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Notes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="announcements" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-academy-teal flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Important Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <h3 className="font-semibold">Exam Schedule Updated</h3>
                      <p className="text-sm text-muted-foreground mb-2">May 5, 2025 • Registrar Office</p>
                      <p>The end-semester examination schedule has been updated. Please check your student portal for the latest timetable.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <h3 className="font-semibold">Library Hours Extended</h3>
                      <p className="text-sm text-muted-foreground mb-2">May 3, 2025 • Library</p>
                      <p>Library hours will be extended during the exam period. The library will remain open until 11 PM from May 15 to June 10.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">All Announcements</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
