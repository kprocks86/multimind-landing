"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { useForm } from '@formspree/react';

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const FORM_KEY = process.env.NEXT_PUBLIC_FORM_KEY || '';

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [state, handleSubmitForm] = useForm(FORM_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", role: "" }

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters."
      isValid = false
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      isValid = false
    }

    if (!formData.role) {
      newErrors.role = "Please select your role."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log(formData)
      handleSubmitForm(formData);
      setIsSubmitted(true)
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        onOpenChange(false)
        setIsSubmitted(false)
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800 text-gray-100">
        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <DialogTitle className="text-2xl mb-2">Thank You!</DialogTitle>
            <DialogDescription className="text-gray-400">
              We've received your information and will be in touch soon.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl text-gray-100">Join as an Early Adopter</DialogTitle>
              <DialogDescription className="text-gray-400">
                Sign up for insider updates, product deep-dives, and invite-only test builds designed for forward-thinking developers, researchers, and builders.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 pt-1">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-200">
                  I am a...
                </Label>
                <Select onValueChange={handleRoleChange} value={formData.role}>
                  <SelectTrigger id="role" className="bg-gray-800 border-gray-700 text-gray-100">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                    <SelectItem value="ai-engineer">AI Engineer</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="hacker-maker">Hacker / Maker</SelectItem>
                    <SelectItem value="llm-startup">LLM SaaS Startup</SelectItem>
                    <SelectItem value="open-source">Open-source Fan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
              </div>

              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  Join Now
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
