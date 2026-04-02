import type { AuditedEntityDto } from '@abp/ng.core';

export interface WorkoutPlanExerciseDto {
  id?: string;
  exerciseId?: string;
  exerciseName?: string;
  order: number;
  sets: number;
  repetitions: number;
  restSeconds: number;
  notes?: string;
}

export interface WorkoutPlanDto extends AuditedEntityDto<string> {
  name: string;
  description?: string;
  exercises: WorkoutPlanExerciseDto[];
}

export interface CreateUpdateWorkoutPlanDto {
  name: string;
  description?: string;
  exercises: WorkoutPlanExerciseDto[];
}
