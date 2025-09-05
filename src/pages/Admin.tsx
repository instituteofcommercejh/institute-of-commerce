import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AdminAuth from "./AdminAuth";

import { 
  Users, 
  BookOpen, 
  Star, 
  Plus, 
  Edit, 
  Trash2, 
  BarChart, 
  TrendingUp,
  Award,
  MessageSquare,
  Settings,
  Upload,
  Mail,
  FileText,
  HelpCircle
} from "lucide-react";
 

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [courseInquiries, setCourseInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchAllData();
    } else {
      setLoading(false);
    }
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    fetchAllData();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    sessionStorage.removeItem("adminEmail");
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={handleAuthenticated} />;
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [enrollmentsResult, contactsResult, inquiriesResult] = await Promise.all([
        supabase.from('enrollments').select('*').order('created_at', { ascending: false }),
        supabase.from('contacts').select('*').order('created_at', { ascending: false }),
        supabase.from('course_inquiries').select('*').order('created_at', { ascending: false })
      ]);

      if (enrollmentsResult.data) setEnrollments(enrollmentsResult.data);
      if (contactsResult.data) setContacts(contactsResult.data);
      if (inquiriesResult.data) setCourseInquiries(inquiriesResult.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: Users, label: "Total Enrollments", value: enrollments.length.toString(), trend: "+12%" },
    { icon: Mail, label: "Contact Messages", value: contacts.length.toString(), trend: "+8%" },
    { icon: HelpCircle, label: "Course Inquiries", value: courseInquiries.length.toString(), trend: "+15%" },
    { icon: Award, label: "Success Rate", value: "95%", trend: "+5%" }
  ];

  const recentStudents = [
    { name: "Amit Kumar", course: "Class 12", status: "Active", lastSeen: "2 hours ago" },
    { name: "Priya Sharma", course: "B.Com", status: "Active", lastSeen: "1 day ago" },
    { name: "Rahul Singh", course: "Class 11", status: "Pending", lastSeen: "3 days ago" },
  ];

  const courses = [
    { title: "Class 11 Commerce", students: 420, status: "Active" },
    { title: "Class 12 Commerce", students: 512, status: "Active" },
    { title: "B.Com Support", students: 315, status: "Active" },
  ];

  const testimonials = [
    { name: "Priya Sharma", rating: 5, text: "Excellent teaching methods!", approved: true },
    { name: "Rahul Kumar", rating: 5, text: "Great support for B.Com...", approved: false },
    { name: "Sneha Patel", rating: 5, text: "Amazing faculty and guidance.", approved: true },
  ];

  const MenuButton = ({ id, icon: Icon, label, isActive }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`group flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-primary/10 text-primary font-semibold shadow-glow-sm'
          : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8 p-6 bg-card rounded-lg border border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-heading font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-700">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your institute with powerful tools.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
              <Button className="btn-gradient">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="p-4 bg-card rounded-lg border border-border space-y-2">
              <MenuButton id="dashboard" icon={BarChart} label="Dashboard" isActive={activeTab === "dashboard"} />
              <MenuButton id="enrollments" icon={FileText} label="Enrollments" isActive={activeTab === "enrollments"} />
              <MenuButton id="contacts" icon={Mail} label="Contact Messages" isActive={activeTab === "contacts"} />
              <MenuButton id="inquiries" icon={HelpCircle} label="Course Inquiries" isActive={activeTab === "inquiries"} />
              <MenuButton id="courses" icon={BookOpen} label="Courses" isActive={activeTab === "courses"} />
              <MenuButton id="testimonials" icon={MessageSquare} label="Testimonials" isActive={activeTab === "testimonials"} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="group relative p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-glow-hover">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <stat.icon className="h-6 w-6" />
                        </div>
                        <div className={`font-bold text-sm ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.trend}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <h3 className="font-heading font-bold text-2xl mb-4">Recent Enrollments</h3>
                    <div className="space-y-4">
                      {loading ? (
                        <p className="text-muted-foreground">Loading...</p>
                      ) : enrollments.slice(0, 3).map((enrollment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50">
                          <div>
                            <div className="font-semibold text-foreground">{enrollment.full_name}</div>
                            <div className="text-sm text-muted-foreground">{enrollment.course}</div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(enrollment.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                      {!loading && enrollments.length === 0 && (
                        <p className="text-muted-foreground text-sm">No enrollments yet</p>
                      )}
                    </div>
                  </div>

                  <div className="p-6 bg-card rounded-lg border border-border">
                    <h3 className="font-heading font-bold text-2xl mb-4">Recent Messages</h3>
                    <div className="space-y-4">
                      {loading ? (
                        <p className="text-muted-foreground">Loading...</p>
                      ) : contacts.slice(0, 3).map((contact, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50">
                          <div>
                            <div className="font-semibold text-foreground">{contact.full_name}</div>
                            <div className="text-sm text-muted-foreground truncate max-w-[200px]">{contact.message}</div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(contact.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                      {!loading && contacts.length === 0 && (
                        <p className="text-muted-foreground text-sm">No messages yet</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "courses" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-3xl">Course Management</h2>
                  <Button className="btn-gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <div key={index} className="group relative p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-glow-hover">
                      <h4 className="font-heading font-bold text-xl mb-2">{course.title}</h4>
                      <div className="flex items-center justify-between text-muted-foreground text-sm mb-4">
                        <span>{course.students} Students</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs inline-block font-medium ${course.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                        {course.status}
                      </div>
                      <div className="flex items-center justify-end space-x-1 mt-4">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-500 hover:bg-red-500/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "testimonials" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-3xl">Testimonials</h2>
                  <Button className="btn-gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Testimonial
                  </Button>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="flex items-center space-x-1 text-yellow-400 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                          </div>
                        </div>
                        <div className={`text-sm font-medium px-2 py-1 rounded-md ${testimonial.approved ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                          {testimonial.approved ? 'Approved' : 'Pending'}
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-3 italic">"{testimonial.text}"</p>
                      <div className="flex items-center justify-end space-x-2 mt-3">
                        {!testimonial.approved && (
                          <Button size="sm" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Approve
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-500 hover:bg-red-500/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "enrollments" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-3xl">Enrollment Management</h2>
                  <Button onClick={fetchAllData} variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Refresh Data
                  </Button>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  {loading ? (
                    <p className="text-center text-muted-foreground py-8">Loading enrollments...</p>
                  ) : enrollments.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">No enrollments found</p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Previous Education</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {enrollments.map((enrollment) => (
                          <TableRow key={enrollment.id}>
                            <TableCell className="font-semibold">{enrollment.full_name}</TableCell>
                            <TableCell>{enrollment.email}</TableCell>
                            <TableCell>{enrollment.phone || 'N/A'}</TableCell>
                            <TableCell>{enrollment.course}</TableCell>
                            <TableCell>{enrollment.previous_education || 'N/A'}</TableCell>
                            <TableCell>{new Date(enrollment.created_at).toLocaleDateString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </div>
              </div>
            )}

            {activeTab === "contacts" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-3xl">Contact Messages</h2>
                  <Button onClick={fetchAllData} variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Refresh Data
                  </Button>
                </div>

                <div className="space-y-6">
                  {loading ? (
                    <p className="text-center text-muted-foreground py-8">Loading messages...</p>
                  ) : contacts.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">No messages found</p>
                  ) : (
                    contacts.map((contact) => (
                      <div key={contact.id} className="p-6 bg-card rounded-lg border border-border">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-lg">{contact.full_name}</h4>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            {contact.phone && <p className="text-sm text-muted-foreground">{contact.phone}</p>}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {new Date(contact.created_at).toLocaleString()}
                          </span>
                        </div>
                        <div className="bg-muted/20 p-4 rounded-md">
                          <p className="text-foreground">{contact.message}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === "inquiries" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-3xl">Course Inquiries</h2>
                  <Button onClick={fetchAllData} variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Refresh Data
                  </Button>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  {loading ? (
                    <p className="text-center text-muted-foreground py-8">Loading inquiries...</p>
                  ) : courseInquiries.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">No inquiries found</p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Education</TableHead>
                          <TableHead>Schedule</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {courseInquiries.map((inquiry) => (
                          <TableRow key={inquiry.id}>
                            <TableCell className="font-semibold">{inquiry.full_name}</TableCell>
                            <TableCell>{inquiry.email}</TableCell>
                            <TableCell>{inquiry.phone || 'N/A'}</TableCell>
                            <TableCell>{inquiry.course_name}</TableCell>
                            <TableCell>{inquiry.current_education || 'N/A'}</TableCell>
                            <TableCell>{inquiry.preferred_schedule || 'N/A'}</TableCell>
                            <TableCell>{new Date(inquiry.created_at).toLocaleDateString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </div>
              </div>
            )}

            {activeTab === "students" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-3xl">Student Management</h2>
                  <Button className="btn-gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Input placeholder="Search students..." />
                    <Input type="select" placeholder="All Courses" />
                    <Input type="select" placeholder="All Status" />
                  </div>

                  <div className="space-y-4">
                    {recentStudents.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-muted/20">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <span className="font-bold text-white text-sm">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{student.name}</div>
                            <div className="text-sm text-muted-foreground">{student.course}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className={`text-sm font-medium px-2 py-1 rounded-md ${student.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                              {student.status}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">{student.lastSeen}</div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-500 hover:bg-red-500/10">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;