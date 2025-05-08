
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

interface Deadline {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  status: 'upcoming' | 'overdue' | 'completed';
  priority: 'high' | 'medium' | 'low';
}

const deadlines: Deadline[] = [
  { 
    id: 1, 
    title: "Programming Assignment", 
    course: "Computer Science", 
    dueDate: "2025-05-10", 
    status: "upcoming", 
    priority: "high" 
  },
  { 
    id: 2, 
    title: "Physics Lab Report", 
    course: "Physics", 
    dueDate: "2025-05-13", 
    status: "upcoming", 
    priority: "medium" 
  },
  { 
    id: 3, 
    title: "Mathematics Quiz", 
    course: "Mathematics", 
    dueDate: "2025-05-15", 
    status: "upcoming", 
    priority: "medium" 
  },
  { 
    id: 4, 
    title: "Literature Essay", 
    course: "English", 
    dueDate: "2025-05-02", 
    status: "overdue", 
    priority: "high" 
  },
  { 
    id: 5, 
    title: "Chemistry Homework", 
    course: "Chemistry", 
    dueDate: "2025-04-30", 
    status: "completed", 
    priority: "low" 
  }
];

const DeadlinesPage: React.FC = () => {
  const { toast } = useToast();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return '';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleMarkAsComplete = (id: number) => {
    toast({
      title: "Marked as complete",
      description: "The deadline has been marked as completed.",
    });
  };

  const getTimeRemaining = (dueDate: string) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return '1 day left';
    return `${diffDays} days left`;
  };

  const upcomingDeadlines = deadlines.filter(deadline => deadline.status === 'upcoming');
  const overdueDeadlines = deadlines.filter(deadline => deadline.status === 'overdue');
  const completedDeadlines = deadlines.filter(deadline => deadline.status === 'completed');

  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Deadlines</h1>
        <Button>
          <Calendar className="mr-2 h-4 w-4" /> Add New Deadline
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming
            </CardTitle>
            <CardDescription>Assignments due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{upcomingDeadlines.length}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Overdue
            </CardTitle>
            <CardDescription>Past due assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{overdueDeadlines.length}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-600 dark:text-green-400 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Completed
            </CardTitle>
            <CardDescription>Finished assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{completedDeadlines.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Deadlines</CardTitle>
          <CardDescription>View and manage your assignment deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Time Left</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deadlines.map((deadline) => (
                <TableRow key={deadline.id} className={deadline.status === 'completed' ? 'opacity-60' : ''}>
                  <TableCell className="font-medium">{deadline.title}</TableCell>
                  <TableCell>{deadline.course}</TableCell>
                  <TableCell>{formatDate(deadline.dueDate)}</TableCell>
                  <TableCell>{getTimeRemaining(deadline.dueDate)}</TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(deadline.priority)}>
                      {deadline.priority.charAt(0).toUpperCase() + deadline.priority.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(deadline.status)}>
                      {deadline.status.charAt(0).toUpperCase() + deadline.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {deadline.status !== 'completed' && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleMarkAsComplete(deadline.id)}
                      >
                        Mark Complete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Export as CSV</Button>
          <Button variant="outline">Filter</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeadlinesPage;
