-- AlterTable
CREATE SEQUENCE feedback_id_seq;
ALTER TABLE "Feedback" ALTER COLUMN "id" SET DEFAULT nextval('feedback_id_seq');
ALTER SEQUENCE feedback_id_seq OWNED BY "Feedback"."id";
