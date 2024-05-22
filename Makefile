.PHONY: clean showtime

# ANSI escape codes for color formatting
BLACK := "\033[0;30m"
RED := "\033[0;31m"
GREEN := "\033[0;32m"
YELLOW := "\033[0;33m"
BLUE := "\033[0;34m"
PURPLE := "\033[0;35m"
CYAN := "\033[0;36m"
WHITE := "\033[0;37m"
BOLD := "\033[1m"
UNDERLINE := "\033[4m"
REVERSED := "\033[7m"
RESET := "\033[0m"


# Function for printing warnings with custom message
define print_warning
	@echo $(YELLOW)$(strip $1)$(RESET)
endef

define print_info
    @echo $(CYAN)$(strip $1)$(RESET)
endef

define print_success
    @echo $(GREEN)$(strip $1)$(RESET)
endef

define print_error
    @echo $(RED)$(strip $1)$(RESET)
endef

define print_custom
    @echo $(PURPLE)$(strip $1)$(RESET)
endef


# Actions
# Issues may occur in this case use `sudo aa-remove-unknown`
clean:
	@$(call print_success, "▶️ Initiating Cleanup 🧼")

	@$(call print_info, "Stopping all Docker containers...")
	@if [ $$(docker container ls -q | wc -l) -gt 0 ]; then docker container stop $$(docker container ls -q); fi

	@$(call print_info, "Removing all Docker containers...")
	@if [ $$(docker container ls -qa | wc -l) -gt 0 ]; then docker container prune -f; fi

	@$(call print_info, "Removing all Docker images...")
	@docker image rm -f $$(docker image ls -q) 2>/dev/null || true

	@$(call print_info, "Removing all Docker volumes...")
	@docker volume rm $$(docker volume ls -q) 2>/dev/null || true

	@$(call print_success, "Cleaned 🫧")
	@echo


# 1. Creates from Dockerfile with all the files and requirements
# 2. Setup should be with strict versions of the soft
# 3. Ideally to have different setups for Dev, Prod, Test
# 1. Creates from Dockerfile with all the files and requirements
# 2. Setup should be with strict versions of the soft
# 3. Ideally to have different setups for Dev, Prod, Test
showtime:
	@$(call print_success, "▶️ Building Project with Docker 🐋")
	@$(call print_info, "localhost:8000")
	@$(call print_info, "localhost:5173")
	docker compose up
