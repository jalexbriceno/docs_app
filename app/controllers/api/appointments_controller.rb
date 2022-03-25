  class Api::AppointmentsController < ApplicationController
    before_action :set_doctors
    before_action :set_appointments, only: [:show, :update, :destroy]

  def index
    render json: @doctor.appointments
  end

  def show
    render json: @appointment
  end

  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json { errors: @appointment.errors }, status: :unprocessable_entity
    
    end
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end
  def destroy
    @appointment.destroy
    render json {message: 'Appointment deleted'}
  
  end

  private
    def appointment_params
      params.require(:appointment).permit(:appt_date, :appt_time, :user_id)
    
  end

  def set_doctor
    @doctor = Doctor.find(params[:doctor_id])
  end

  def set_appointment
    @appointment = @doctor.appointments.find(params[:id])
  end
  end


