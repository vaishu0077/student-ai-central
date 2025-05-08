
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const facultyMembers = [
  {
    id: 1,
    name: "Sivakami",
    department: "Computer Science",
    expertise: ["AI", "Machine Learning"],
    email: "sivakami@academy.edu"
  },
  {
    id: 2,
    name: "Kaladevi",
    department: "Information Technology",
    expertise: ["Database Systems", "Web Development"],
    email: "kaladevi@academy.edu"
  },
  {
    id: 3,
    name: "Kowaslya",
    department: "Computer Science",
    expertise: ["Networking", "Cybersecurity"],
    email: "kowaslya@academy.edu"
  },
  {
    id: 4,
    name: "Pournima",
    department: "Information Technology",
    expertise: ["Software Engineering", "Mobile Development"],
    email: "pournima@academy.edu"
  },
  {
    id: 5,
    name: "Sathyabhama",
    department: "Computer Science",
    expertise: ["Data Science", "Cloud Computing"],
    email: "sathyabhama@academy.edu"
  }
];

const FacultyPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Faculty Directory</h1>
        <p className="text-muted-foreground">Connect with our expert faculty members for academic guidance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyMembers.map((faculty) => (
          <Card key={faculty.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${faculty.name}`} />
                  <AvatarFallback className="bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{faculty.name}</CardTitle>
                  <CardDescription>{faculty.department}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {faculty.expertise.map((area) => (
                    <Badge key={area} variant="secondary">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 flex justify-between">
              <span className="text-sm text-muted-foreground">{faculty.email}</span>
              <button className="text-sm text-primary hover:underline">Contact</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
