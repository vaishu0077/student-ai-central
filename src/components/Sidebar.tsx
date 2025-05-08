
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Book, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Search, 
  User, 
  Users, 
  Clock 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <Search className="h-5 w-5" />, label: "AI Assistant", path: "/assistant" },
    { icon: <Calendar className="h-5 w-5" />, label: "Schedule", path: "/schedule" },
    { icon: <FileText className="h-5 w-5" />, label: "Notes", path: "/notes" },
    { icon: <Book className="h-5 w-5" />, label: "Syllabus", path: "/syllabus" },
    { icon: <Clock className="h-5 w-5" />, label: "Deadlines", path: "/deadlines" },
    { icon: <Users className="h-5 w-5" />, label: "Faculty", path: "/faculty" },
  ];

  const StudentResourcesItems = [
    { icon: <FileText className="h-5 w-5" />, label: "Question Papers", path: "/questions" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Discussions", path: "/discussions" },
    { icon: <User className="h-5 w-5" />, label: "My Profile", path: "/profile" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 h-[calc(100vh-4rem)]">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 px-2">Navigation</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 mt-4 p-4">
        <h2 className="text-lg font-semibold mb-4 px-2">Student Resources</h2>
        <nav className="space-y-1">
          {StudentResourcesItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-slate-200 dark:border-slate-800">
        <Button className="w-full bg-academy-primary hover:bg-academy-primary/90">
          Get AI Help
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
