using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NtpcNexus.API.Migrations
{
    /// <inheritdoc />
    public partial class RenameReferenceIdToProjectId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReferenceId",
                table: "UserSubmissions",
                newName: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSubmissions_ProjectId",
                table: "UserSubmissions",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserSubmissions_Applications_ProjectId",
                table: "UserSubmissions",
                column: "ProjectId",
                principalTable: "Applications",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserSubmissions_Applications_ProjectId",
                table: "UserSubmissions");

            migrationBuilder.DropIndex(
                name: "IX_UserSubmissions_ProjectId",
                table: "UserSubmissions");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "UserSubmissions",
                newName: "ReferenceId");
        }
    }
}
