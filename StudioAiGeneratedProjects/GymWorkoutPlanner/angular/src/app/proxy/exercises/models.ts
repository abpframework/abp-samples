import type { AuditedEntityDto } from '@abp/ng.core';

export interface ExerciseDto extends AuditedEntityDto<string> {
  name: string;
  targetMuscleGroup: string;
  description?: string;
}

export interface CreateUpdateExerciseDto {
  name: string;
  targetMuscleGroup: string;
  description?: string;
}
