
-- Create enrollment form table
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  course TEXT NOT NULL,
  previous_education TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact form table  
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course inquiries table
CREATE TABLE public.course_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  course_name TEXT NOT NULL,
  current_education TEXT,
  preferred_schedule TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) - allowing public access since these are public forms
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert data (public forms)
CREATE POLICY "Anyone can submit enrollment forms" 
  ON public.enrollments 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contact forms" 
  ON public.contacts 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can submit course inquiries" 
  ON public.course_inquiries 
  FOR INSERT 
  WITH CHECK (true);

-- Create policies to allow only authenticated users to view data (admin dashboard)
CREATE POLICY "Authenticated users can view enrollments" 
  ON public.enrollments 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view contacts" 
  ON public.contacts 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view course inquiries" 
  ON public.course_inquiries 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
