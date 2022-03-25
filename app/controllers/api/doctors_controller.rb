class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :update, :destroy, :users]
  
  def index
    render json: Doctor.all
  end

  def show
    render json: @doctor
  end

  def users 
    render json: @doctor.users
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save 
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @doctor.update(doctor_params) 
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor.destroy
    render json: { message: 'Doctor deleted' }
  end

  private 
    def doctor_params
      params.require(:doctor).permit(:first_name, :last_name, :speciality, :bio)
    end

    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

end